import PropTypes from "prop-types";
import Button from "../Button";
import "./index.css";

const Product = ({
  highlight,
  src,
  title,
  stars,
  session,
  price,
  classColor,
  handleShopping,
}) => {
  return (
    <div className="product-card">
      <div className={`product-highlight ${classColor}`}>
        <h5>{highlight}</h5>
      </div>
      <div className="product-image">
        <img src={src} alt={title} />
      </div>
      <div className="product-session">
        <h5>{session}</h5>
      </div>
      <div className="product-title">
        <h3>{title}</h3>
      </div>
      <div className="product-stars">
        <p>{stars}</p>
      </div>
      <div className="product-price-tag">
        <div className="product-price">
          <h3>$ {price}</h3>
        </div>
        <div className="product-buy-button">
          <Button text="Buy" className="green" onClick={handleShopping} />
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  highlight: PropTypes.string,
  src: PropTypes.string,
  title: PropTypes.string,
  stars: PropTypes.string,
  session: PropTypes.string,
  price: PropTypes.string,
  classColor: PropTypes.string,
  handleShopping: PropTypes.func,
};

export default Product;
