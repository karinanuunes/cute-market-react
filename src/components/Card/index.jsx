import PropTypes from "prop-types";
import "./index.css";
import Button from "../Button";

const Card = ({ classButtonColor, classColor, title, src }) => {
  return (
    <div className={`card ${classColor}`}>
      <div className="card-title">
        <h3>{title}</h3>
      </div>
      <div className="card-image">
        <img src={src} alt={title} />
      </div>
      <Button text="Show Now" className={`shop ${classButtonColor}`} />
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
