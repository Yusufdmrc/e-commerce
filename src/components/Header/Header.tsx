import { useEffect, useState } from "react";
import "./header.css";
import { BsSun, BsBasket3Fill, BsMoon } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { DRAWER_ACTION } from "../../redux/constants/ActionTypes";

const Navbar: React.FC = () => {
  const [mode, setMode] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const root = document.getElementById("root");
    if (root) {
      if (mode) {
        root.style.backgroundColor = "#000";
        root.style.color = "#fff";
      } else {
        root.style.backgroundColor = "#fff";
        root.style.color = "#000";
      }
    }
  }, [mode]);
  return (
    <header>
      <div className="navbar-top">
        <a href="/">E-Commerce</a>
      </div>
      <div className="navbar">
        <div className="navbar-left">
          <p className="icon">E-Commerce</p>
        </div>
        <div className="navbar-center">
          <input type="text" placeholder="Search..." className="navbar-input" />
        </div>
        <div className="navbar-right">
          <div
            onClick={() => dispatch({ type: DRAWER_ACTION, payload: true })}
            className="basket"
          >
            <BsBasket3Fill className="icon" size={22} />
            <span className="basket-quantity">x</span>
          </div>
          <div onClick={() => setMode(!mode)}>
            {mode ? (
              <BsMoon className="icon" size={22} />
            ) : (
              <BsSun className="icon" size={22} />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
