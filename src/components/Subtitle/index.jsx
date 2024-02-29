import PropTypes from "prop-types";
import "./index.css";

const SubTitle = ({ subtitle }) => {
  return <h2>{subtitle}</h2>;
};

SubTitle.propTypes = {
  subtitle: PropTypes.string,
};

export default SubTitle;
