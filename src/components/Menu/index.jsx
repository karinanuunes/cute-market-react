import Button from "../Button";
import "./index.css";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <div className="menu">
      <div className="menu-home">
        <Button
          text="Cute Market 🌺"
          className="mustard kakana"
          onClick={goHome}
        />
      </div>
      <div className="menu-options">
        <Button text="Shopping" className="orange" onClick={goHome} />
        <Button text="About Us" className="yellow" onClick={goHome} />
        <Button text="Delivery" className="purple" onClick={goHome} />
        <Button text="Location" className="peach" onClick={goHome} />
        <Button text="Recycle" className="green" onClick={goHome} />
        <Button text="Sale" className="blue" onClick={goHome} />
        <Button text="Cart" className="pink" onClick={goHome} />
      </div>
    </div>
  );
};

export default Menu;
