import { useParams } from "react-router-dom";
import "./info.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productInfoAction } from "../../redux/actions/productInfo";
import { RootState } from "../../redux/store";

const Info = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const { productInfo } = useSelector((state: RootState) => state.productInfo);
  console.log(id);

  useEffect(() => {
    dispatch(productInfoAction(Number(id)));
  }, [dispatch, id]);

  console.log(productInfo);

  return (
    <div className="info-container">
      <div className="info-image">
        <img src={productInfo?.image} alt="" />
      </div>
      <div className="product-wrapper">
        <div className="product-info">
          <h3 className="product-title">{productInfo?.title}</h3>
          <p className="product-category">
            <span>Category:</span>
            {productInfo?.category}
          </p>
          <h5 className="product-price">€ {productInfo?.price}</h5>
          <p className="product-count">
            <span>Count:</span>
            {productInfo?.rating?.count}
          </p>
        </div>
        <div className="product-description">
          <h3 className="product-desc-title">Product Features</h3>
          <p className="product-desc">{productInfo?.description}</p>
          <p className="product-rate">
            <span>Rating(5):</span> {productInfo?.rating?.rate}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
