import { useEffect, useState } from "react";
import "./header.css";
import { BsSun, BsBasket3Fill, BsMoon } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { DRAWER_ACTION } from "../../redux/constants/ActionTypes";
import { searchAction } from "../../redux/actions/search";
import { useTranslation } from "react-i18next";
import { BiLogOut } from "react-icons/bi";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../../firebase";

const Navbar: React.FC = () => {
  const [mode, setMode] = useState(false);
  const dispatch = useDispatch();
  const [search, setSearch] = useState<string>("");
  const { basketItems } = useSelector((state: RootState) => state.basket);

  const { t, i18n } = useTranslation();

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

  const searchProduct = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      dispatch(searchAction(search));
    }
  };

  const logout = async () => {
    toast.success("Exiting...");
    await signOut(auth);
    setTimeout(() => {
      window.location = "/auth";
    }, 2000);
  };

  return (
    <header>
      <div className="navbar-top">
        <a href="/">{t("header.home")}</a>
      </div>
      <div className="navbar">
        <div className="navbar-left">
          <a href="/shop" className="icon">
            E-Commerce
          </a>
        </div>
        <div className="navbar-center">
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            onKeyPress={searchProduct}
            type="text"
            placeholder="Search..."
            className="navbar-input"
          />
        </div>

        <div className="navbar-right">
          <div
            onClick={() => dispatch({ type: DRAWER_ACTION, payload: true })}
            className="basket"
          >
            <BsBasket3Fill className="icon" size={22} />
            <span className="basket-quantity">{basketItems?.length}</span>
          </div>
          <div onClick={() => setMode(!mode)}>
            {mode ? (
              <BsMoon className="icon" size={22} />
            ) : (
              <BsSun className="icon" size={22} />
            )}
          </div>
          <div onClick={logout} className="logout">
            <BiLogOut size={22} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
