import { useDispatch } from "react-redux";
import "./basket.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { DRAWER_ACTION } from "../../redux/constants/ActionTypes";

const Basket = () => {
  const dispatch = useDispatch();
  return (
    <div className="basket-container">
      <div className="basket-header">
        <h1 className="basket-title">My Basket</h1>
        <AiOutlineCloseCircle
          onClick={() => dispatch({ type: DRAWER_ACTION, payload: false })}
          className="icon"
          size={30}
        />
      </div>
    </div>
  );
};

export default Basket;
