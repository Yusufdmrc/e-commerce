import "./language.css";
import { useTranslation } from "react-i18next";

const Language = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="home-lang">
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
  );
};

export default Language;
