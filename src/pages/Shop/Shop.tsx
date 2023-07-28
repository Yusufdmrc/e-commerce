import { useEffect, useState } from "react";
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

const Home = () => {
  const dispatch = useDispatch();
  const { productData } = useSelector((state: RootState) => state.productData);

  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 8;
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = productData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(productData.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % productData.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  const { search } = useSelector((state: RootState) => state.search);
  const [sort, setSort] = useState<string>("");
  const [category, setCategory] = useState<string>("");

  useEffect(() => {
    dispatch(productDataAction());
    dispatch(searchAction());
  }, [dispatch]);
  console.log(productData);

  return (
    <>
      <Header />
      <Sort />
      <div className="product-category">
        <Category />
        <>
          <section className="product-container">
            {search.length > 0
              ? search.map((product: ProductData) => (
                  <Products product={product} key={product.id} />
                ))
              : productData &&
                currentItems.map((product: ProductData) => (
                  <Products product={product} key={product.id} />
                ))}
          </section>
          <ReactPaginate
            className="paginate"
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
          />
        </>
      </div>
    </>
  );
};

export default Home;
