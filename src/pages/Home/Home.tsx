import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productDataAction } from "../../redux/actions/productData";
import { RootState } from "../../redux/store";
import { Products } from "../../components/Products/Products";
import "./home.css";
import { ProductData } from "../../redux/reducers/productData";

const Home = () => {
  const dispatch = useDispatch();
  const { productData } = useSelector((state: RootState) => state.productData);

  useEffect(() => {
    dispatch(productDataAction());
  }, [dispatch]);
  console.log(productData);

  return (
    <div className="product-container">
      {productData &&
        productData.map((product: ProductData) => {
          return <Products product={product} key={product.id} />;
        })}
    </div>
  );
};

export default Home;
