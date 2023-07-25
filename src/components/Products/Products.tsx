import "./products.css";

export const Products = ({ product }) => {
  return (
    <div className="product">
      <img
        onClick={() => (window.location.href = `info/${product.id}`)}
        className="product-image"
        src={product?.image}
        alt="img"
      />
      <h5 className="product-title">{product?.title}</h5>
      <p className="product-price">€ {product.price}</p>
      <p className="product-category">
        <span>Category:</span> {product.category}
      </p>
      <button className="btn">Add Basket</button>
    </div>
  );
};
