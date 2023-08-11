import { useParams } from "react-router-dom";
import "./productDetails.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productInfoAction } from "../../redux/actions/productInfo";
import { RootState } from "../../redux/store";
import { basketAction } from "../../redux/actions/basket";
import Header from "../../components/Header/Header";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const { productInfo } = useSelector((state: RootState) => state.productInfo);

  useEffect(() => {
    dispatch(productInfoAction(Number(id)));
  }, [dispatch, id]);

  const addBasket = () => {
    dispatch(basketAction(id));
    dispatch({ type: "DRAWER_ACTION", payload: true });
    setCount(0);
  };

  return (
    <>
      <Header />
      <section className="info-container">
        <div className="info-image">
          <img src={productInfo?.image} alt="" />
        </div>
        <div className="product-wrapper">
          <div className="product-info">
            <h3 className="product-title">{productInfo?.title}</h3>
            <h5 className="product-price">€ {productInfo?.price}</h5>
            <button onClick={addBasket} className="add-btn btn">
              Add To Basket
            </button>
          </div>

          <div className="product-description">
            <h3 className="product-desc-title">Product Features</h3>
            <p className="product-desc">{productInfo?.description}</p>
            <div className="flex">
              <p className="product-category">
                <span>Category:</span>
                {productInfo?.category}
              </p>
              <p className="product-rate">
                <span>Rating(5):</span> {productInfo?.rating?.rate}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
