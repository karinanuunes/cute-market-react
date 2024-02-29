import "./index.css";
import Button from "../Button";

const Form = () => {
  return (
    <div className="form">
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" />
        <label htmlFor="birt">Birthday:</label>
        <input type="date" />
        <label htmlFor="country">Country:</label>
        <select name="counrty" id="contry">
          <option value="select">Select option</option>
          <option value="argentina">Argentina</option>
          <option value="brazil">Brazil</option>
          <option value="paraguay">Paraguay</option>
        </select>
        <Button text="Follow" className="green" />
      </form>
    </div>
  );
};

export default Form;
