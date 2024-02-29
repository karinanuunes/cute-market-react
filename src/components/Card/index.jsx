import PropTypes from "prop-types";
import "./index.css";

const Card = ({ classColor, title, src }) => {
  return (
    <div className={`card ${classColor}`}>
      <h3>{title}</h3>
      <img src={src} alt={title} />
    </div>
  );
};

Card.propTypes = {
  classColor: PropTypes.string,
  title: PropTypes.string,
  src: PropTypes.string,
};

export default Card;
