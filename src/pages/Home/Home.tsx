import { Link } from "react-router-dom";
import "./home.css";
import homeImg from "../../assets/img/e-commerce.jpg";
import { useTranslation } from "react-i18next";
import Language from "../../components/Language/Language";

import Login from "../../components/Auth/Login";

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="home-top">
        <div className="home-title">
          <a href="/">{t("home.top")}</a>
        </div>
        <div className="home-auth">
          <div className="home-login">
            <Login />
          </div>
          <div className="home-lang">
            <Language />
          </div>
        </div>
      </div>
      <section className="home-container">
        <div className="home left">
          <h3 className="home-title">{t("home.title")}</h3>
          <h1 className="home-slogan">{t("home.slogan")}</h1>
          <p className="home-desc"></p>
          <button className="home-btn ">
            <Link to="/products">{t("home.explore")}</Link>
          </button>
        </div>
        <div className="home-right">
          <img src={homeImg} alt="home-img" />
        </div>
      </section>
    </>
  );
};

export default Home;
