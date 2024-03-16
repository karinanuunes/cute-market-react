import Button from "../Button";
import "./index.css";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  const goAbout = () => {
    navigate("/about");
  };

  const goCheckList = () => {
    navigate("/checklist");
  };

  const goShopping = () => {
    navigate("/shopping");
  };

  const goDelivery = () => {
    navigate("/delivery");
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
        <Button text="Shopping" className="orange" onClick={goShopping} />
        <Button text="About Us" className="yellow" onClick={goAbout} />
        <Button text="Delivery" className="purple" onClick={goDelivery} />
        <Button text="Check List" className="peach" onClick={goCheckList} />
        <Button text="Recycle" className="green" onClick={goHome} />
        <Button text="Log In" className="blue" onClick={goHome} />
        <Button text="Cart" className="pink" onClick={goHome} />
      </div>
    </div>
  );
};

export default Menu;
