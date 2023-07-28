import { Link } from "react-router-dom";
import "./home.css";
import homeImg from "../../assets/img/e-commerce.jpg";

const Home: React.FC = () => {
  return (
    <>
      <div className="home-top">
        <a href="/">E-Commerce</a>
      </div>
      <section className="home-container">
        <div className="home left">
          <h3 className="home-title">Discover Your Style, Express Yourself</h3>
          <h1 className="home-slogan">
            Experience the Passion for Fashion, Reflect Your Style
          </h1>
          <p className="home-desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
            ducimus aut numquam architecto facere officia.
          </p>
          <button className="home-btn ">
            <Link to="/shop">Explore Now</Link>
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
