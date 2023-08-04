import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productDataAction } from "../../redux/actions/productData";
import { RootState } from "../../redux/store";
import { ProductDetail } from "../../components/ProductDetail/ProductDetail";
import "./shop.css";
import { searchAction } from "../../redux/actions/search";
import { ProductData } from "../../Types/Type";
import Header from "../../components/Header/Header";
import Sort from "../../components/Sort/Sort";
import Category from "../../components/Category/Category";
import Pagination from "../../components/Pagination/Pagination";
import Gender from "../../components/Gender/Gender";

const Shop: React.FC = () => {
  const dispatch = useDispatch();
  const { search } = useSelector((state: RootState) => state.search);
  const [sort, setSort] = useState<string>("");
  const [category, setCategory] = useState<string | null>(null);

  const { productData } = useSelector((state: RootState) => state.productData);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 8;
  const endOffset = itemOffset + itemsPerPage;

  const filteredProductData = category
    ? productData?.filter((product) => product.category === category)
    : productData;

  const sortedProductData = filteredProductData
    ?.slice()
    .sort((a, b) =>
      sort === "increasing"
        ? a.price - b.price
        : sort === "decreasing"
        ? b.price - a.price
        : 0
    );

  const currentItems = sortedProductData?.slice(itemOffset, endOffset);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset =
      (event.selected * itemsPerPage) % (sortedProductData?.length || 0);
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  const pageCount = Math.ceil(filteredProductData?.length / itemsPerPage) || 1;

  useEffect(() => {
    if (category) {
      setCategory(category);
    } else {
      dispatch(productDataAction());
      dispatch(searchAction());
    }
  }, [dispatch, category]);

  return (
    <>
      <Header />
      <div className="products">
        <div className="category-sort">
          <Gender setCategory={setCategory} />
          <Category setCategory={setCategory} />
          <Sort setSort={setSort} />
        </div>
        <section className="product-container">
          {search.length > 0
            ? search.map((product: ProductData) => (
                <ProductDetail product={product} key={product.id} />
              ))
            : currentItems?.map((product: ProductData) => (
                <ProductDetail product={product} key={product.id} />
              ))}
        </section>
      </div>
      <Pagination
        className="paginate"
        pageCount={pageCount}
        onPageChange={handlePageClick}
      />
    </>
  );
};

export default Shop;
