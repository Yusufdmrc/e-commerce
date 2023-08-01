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
  const [counters, setCounters] = useState<{ [id: number]: number }>({});

  const incrementCounter = (id: number) => {
    setCounters((prevCounters) => ({
      ...prevCounters,
      [id]: (prevCounters[id] || 0) + 1,
    }));
  };

  const decrementCounter = (id: number) => {
    setCounters((prevCounters) => ({
      ...prevCounters,
      [id]: Math.max((prevCounters[id] || 0) - 1, 0),
    }));
  };

  const deleteBasket = (id: number) => {
    dispatch(removeBasket(id));
  };

  const getTotalPrice = () => {
    let totalPrice = 0;
    basketItems.forEach((item) => {
      totalPrice += item.price * item.amount;
    });
    return totalPrice;
  };

  return (
    <div className="basket-container">
      <div className="basket-header">
        <h1 className="basket-title">Basket</h1>
        <AiOutlineCloseCircle
          onClick={() => dispatch({ type: DRAWER_ACTION, payload: false })}
          className="icon"
          size={30}
        />
      </div>

      {basketItems?.map((basket: ProductData) => (
        <div key={basket.id} className="basket-content">
          <img className="basket-image" src={basket.image} alt="basket-image" />
          <div className="basket-title">{basket.title.substring(0, 17)}</div>

          <div className="counter-container">
            <AiFillMinusCircle
              className="counter-icon"
              onClick={() => decrementCounter(basket.id)}
              size={18}
            />
            <span className="counter-value">{counters[basket.id] || 0}</span>
            <AiFillPlusCircle
              className="counter-icon"
              onClick={() => incrementCounter(basket.id)}
              size={18}
            />
          </div>

          <div className="basket-price">
            €{Math.floor(basket.price * basket.amount)}
          </div>

          <button
            onClick={() => deleteBasket(basket.id)}
            className="basket-btn btn"
          >
            DELETE
          </button>
        </div>
      ))}
      <div className="total-price">
        <p>Total Price: €{Math.floor(getTotalPrice())}</p>
      </div>
    </div>
  );
};

export default Basket;
