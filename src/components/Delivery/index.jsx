import Button from "../Button";
import PropTypes from "prop-types";
import "./index.css";

const Delivery = ({ title, src }) => {
  return (
    <div className="banner">
      <div className="banner-title">
        <h1>{title}</h1>
        <Button text="Order Now" className="yellow" />
      </div>
      <div className="banner-image">
        <img src={src} alt="" />
      </div>
    </div>
  );
};

Delivery.propTypes = {
  title: PropTypes.string,
  src: PropTypes.string,
};

export default Delivery;
