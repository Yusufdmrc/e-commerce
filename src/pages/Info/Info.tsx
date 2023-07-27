import { useParams } from "react-router-dom";
import "./info.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productInfoAction } from "../../redux/actions/productInfo";
import { RootState } from "../../redux/store";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { basketAction } from "../../redux/actions/basket";

const Info = () => {
  const [count, setCount] = useState(0);
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const { productInfo } = useSelector((state: RootState) => state.productInfo);
  console.log(id);

  useEffect(() => {
    dispatch(productInfoAction(Number(id)));
  }, [dispatch, id]);

  console.log(productInfo);

  const addBasket = () => {
    dispatch(basketAction(id, count));
    dispatch({ type: "DRAWER_ACTION", payload: true });
  };

  const increment = (stock) => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="info-container">
      <div className="info-image">
        <img src={productInfo?.image} alt="" />
      </div>
      <div className="product-wrapper">
        <div className="product-info">
          <h3 className="product-title">{productInfo?.title}</h3>
          <h5 className="product-price">€ {productInfo?.price}</h5>
          <div className="product-meter">
            <AiFillMinusCircle
              onClick={decrement}
              size={25}
              className="meter-icon"
            />
            <span>{count}</span>
            <AiFillPlusCircle
              onClick={() => increment(productInfo?.rating?.count)}
              size={25}
              className="meter-icon"
            />
          </div>
          <p className="product-count">
            <span>Count:</span>
            {productInfo?.rating?.count}
          </p>
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
    </div>
  );
};

export default Info;
