import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productDataAction } from "../../redux/actions/productData";
import { RootState } from "../../redux/store";
import { Products } from "../../components/Products/Products";
import "./shop.css";
import { searchAction } from "../../redux/actions/search";
import { ProductData } from "../../Types/Type";
import Header from "../../components/Header/Header";
import Sort from "../../components/Sort/Sort";
import Category from "../../components/Category/Category";
import ReactPaginate from "react-paginate";

const Shop: React.FC<{ users: { email: string } }> = ({ users }) => {
  const dispatch = useDispatch();
  const { search } = useSelector((state: RootState) => state.search);
  const [sort, setSort] = useState<string>("");
  const [category, setCategory] = useState<string | null>(null);

  console.log(sort);
  const { productData } = useSelector((state: RootState) => state.productData);
  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 8;
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);

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

  console.log(productData);

  const logout = async () => {
    await signOut(auth);
    window.location = "/auth";
  };

  return (
    <>
      <Header />
      {/* <div>
        Welcome <span>{users?.email}</span>
      </div> */}
      <div className="product-category">
        <div className="category-sort">
          <Sort setSort={setSort} />
        </div>
        <div className="aa">
          <div className="category">
            <Category setCategory={setCategory} />
          </div>
          <section className="product-container">
            {search.length > 0
              ? search.map((product: ProductData) => (
                  <Products product={product} key={product.id} />
                ))
              : currentItems?.map((product: ProductData) => (
                  <Products product={product} key={product.id} />
                ))}
          </section>
        </div>
        <ReactPaginate
          className="paginate"
          breakLabel="..."
          nextLabel="-->"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<--"
          renderOnZeroPageCount={null}
        />
      </div>
    </>
  );
};

export default Shop;
