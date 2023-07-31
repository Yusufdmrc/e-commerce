import { useDispatch, useSelector } from "react-redux";
import "./basket.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { DRAWER_ACTION } from "../../redux/constants/ActionTypes";
import { RootState } from "../../redux/store";
import { ProductData } from "../../Types/Type";
import { removeBasket } from "../../redux/actions/basket";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

const Basket = () => {
  const { basketItems } = useSelector((state: RootState) => state.basket);
  console.log(basketItems);
  const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();

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
          <div className="basket-count">{basket.amount}</div>
          <div className="basket-price">€{basket.price * basket.amount}</div>
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
