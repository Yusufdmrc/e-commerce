import { useEffect, useState } from "react";
import "./header.css";
import { BsBasket3Fill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { DRAWER_ACTION } from "../../redux/constants/ActionTypes";
import Logout from "../Auth/Logout";
import Search from "../Search/Search";
import ThemeChanger from "../ThemeChanger/ThemeChanger";

const Navbar: React.FC = () => {
  const [mode, setMode] = useState(false);
  const dispatch = useDispatch();
  const { basketItems } = useSelector((state: RootState) => state.basket);

  useEffect(() => {
    const root = document.getElementById("root");
    if (root) {
      if (mode) {
        root.style.backgroundColor = "#2a2f2f";
        root.style.color = "#fff";
      } else {
        root.style.backgroundColor = "#fff";
        root.style.color = "#2a2f2f";
      }
    }
  }, [mode]);

  return (
    <header>
      <div className="navbar-top">
        <a href="/">Home</a>
      </div>
      <div className="navbar">
        <div className="navbar-left">
          <a href="/shop" className="icon">
            E-Commerce
          </a>
        </div>
        <div className="navbar-center">
          <Search />
        </div>
        <div className="navbar-right">
          <div
            onClick={() => dispatch({ type: DRAWER_ACTION, payload: true })}
            className="basket"
          >
            <BsBasket3Fill className="icon" size={22} />
            <span className="basket-quantity">{basketItems?.length}</span>
          </div>
          <ThemeChanger mode={mode} setMode={setMode} />
          <div className="logout">
            <Logout />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
