import PropTypes from "prop-types";
import "./index.css";
import Button from "../Button";

const Card = ({ classButtonColor, classColor, title, src }) => {
  return (
    <div className={`card ${classColor}`}>
      <div className="card-title">
        <h3>{title}</h3>
      </div>
      <div className="card-img">
        <img src={src} alt={title} className="card-image" />
      </div>
      <Button text="Shop Now" className={`shop ${classButtonColor}`} />
    </div>
  );
};

Card.propTypes = {
  classButtonColor: PropTypes.string,
  classColor: PropTypes.string,
  title: PropTypes.string,
  src: PropTypes.string,
};

export default Card;
