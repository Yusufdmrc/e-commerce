import { useDispatch, useSelector } from "react-redux";
import "./basket.css";
import {
  AiFillMinusCircle,
  AiFillPlusCircle,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import { DRAWER_ACTION } from "../../redux/constants/ActionTypes";
import { RootState } from "../../redux/store";
import { ProductData } from "../../Types/Type";
import { removeBasket } from "../../redux/actions/basket";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { useState } from "react";

const Basket = () => {
  const { basketItems } = useSelector((state: RootState) => state.basket);
  console.log(basketItems);
  const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();
  const [itemCounts, setItemCounts] = useState({});

  const increaseItemCount = (id: number) => {
    setItemCounts((prevCounts) => ({
      ...prevCounts,
      [id]: (prevCounts[id] || 0) + 1,
    }));
  };

  const decreaseItemCount = (id: number) => {
    setItemCounts((prevCounts) => ({
      ...prevCounts,
      [id]: Math.max((prevCounts[id] || 0) - 1, 0),
    }));
  };

  const deleteBasket = (id: number) => {
    dispatch(removeBasket(id));
  };

  const getTotalPrice = () => {
    let totalPrice = 0;
    basketItems.forEach((item) => {
      totalPrice += (itemCounts[item.id] || 0) * item.price;
    });
    return totalPrice;
  };

  return (
    <div className="basket-container">
      <div className="basket-header">
        <h1 className="basket-title-header">Basket</h1>
        <AiOutlineCloseCircle
          onClick={() => dispatch({ type: DRAWER_ACTION, payload: false })}
          className="icon"
          size={30}
        />
      </div>

      {basketItems?.map((basket: ProductData) => (
        <div key={basket.id} className="basket-content">
          <div className="basket-image-container">
            <img
              className="basket-image"
              src={basket.image}
              alt="basket-image"
            />
          </div>
          <div className="basket-title">{basket.title.substring(0, 17)}</div>
          <div className="counter-container">
            <AiFillMinusCircle
              onClick={() => decreaseItemCount(basket.id)}
              className="meter-icon"
              size={20}
            />
            <span className="counter-value">{itemCounts[basket.id] || 0}</span>
            <AiFillPlusCircle
              onClick={() => increaseItemCount(basket.id)}
              className="meter-icon"
              size={20}
            />
          </div>

          <div className="basket-price">
            €{Math.floor((itemCounts[basket.id] || 0) * basket.price)}
          </div>
          <div className="basket-button">
            <button
              onClick={() => deleteBasket(basket.id)}
              className="basket-btn btn"
            >
              DELETE
            </button>
          </div>
        </div>
      ))}
      <div className="total-price">
        <p>Total Price: €{Math.floor(getTotalPrice())}</p>
      </div>
    </div>
  );
};

export default Basket;
