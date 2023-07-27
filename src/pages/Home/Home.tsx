import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productDataAction } from "../../redux/actions/productData";
import { RootState } from "../../redux/store";
import { Products } from "../../components/Products/Products";
import "./home.css";
import { searchAction } from "../../redux/actions/search";
import { ProductData, ProductInfo } from "../../Types/Type";

const Home = () => {
  const dispatch = useDispatch();
  const { productData } = useSelector((state: RootState) => state.productData);
  const { search } = useSelector((state: RootState) => state.search);

  useEffect(() => {
    dispatch(productDataAction());
    dispatch(searchAction());
  }, [dispatch]);
  console.log(productData);

  return (
    <div className="product-container">
      {search.length > 0
        ? search.map((product: ProductData) => (
            <Products product={product} key={product.id} />
          ))
        : productData &&
          productData.map((product: ProductData) => (
            <Products product={product} key={product.id} />
          ))}
    </div>
  );
};

export default Home;
