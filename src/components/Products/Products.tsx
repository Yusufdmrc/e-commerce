import "./products.css";
import { ProductData } from "../../redux/reducers/productData";

interface ProductsProps {
  product: ProductData;
}

export const Products: React.FC<ProductsProps> = ({
  product,
}: ProductsProps) => {
  return (
    <div className="product">
      <img
        onClick={() => (window.location.href = `info/${product.id}`)}
        className="product-image"
        src={product?.image}
        alt="img"
      />
      <h5 className="product-title">{product?.title}</h5>
      <p className="product-price">€ {product?.price}</p>
      <p className="product-category">
        <span>Category:</span> {product?.category}
      </p>
      <button
        onClick={() => (window.location.href = `info/${product.id}`)}
        className="btn"
      >
        Review
      </button>
    </div>
  );
};
