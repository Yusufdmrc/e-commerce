import { Link } from "react-router-dom";
import "./home.css";
import homeImg from "../../assets/img/e-commerce.jpg";
import { useTranslation } from "react-i18next";
import { FiLogIn } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";

const Home: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <div className="home-top">
        <div className="home-title">
          <a href="/">{t("home.top")}</a>
        </div>

        <div className="home-lang">
          <div className="home-auth">
            <div className="left">
              <FiLogIn />
            </div>
            <div className="right">
              <BiLogOut />
            </div>
          </div>
          <div onClick={() => changeLanguage("en")}>
            <span role="img" aria-label="english-flag">
              🇺🇸
            </span>
          </div>
          <div onClick={() => changeLanguage("tr")}>
            <span role="img" aria-label="turkish-flag">
              🇹🇷
            </span>
          </div>
        </div>
      </div>
      <section className="home-container">
        <div className="home left">
          <h3 className="home-title">{t("home.title")}</h3>
          <h1 className="home-slogan">{t("home.slogan")}</h1>
          <p className="home-desc"></p>
          <button className="home-btn ">
            <Link to="/shop">{t("home.explore")}</Link>
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
