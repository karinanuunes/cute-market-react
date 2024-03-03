import "./index.css";
import Button from "../Button";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          placeholder="Tell me your name"
          {...register("name", { required: true })}
        />
        {errors.name && (
          <span className="error-msg">This field is required</span>
        )}
        <label htmlFor="birth">Birthday:</label>
        <input type="date" {...register("birthday", { required: true })} />
        {errors.birthday && (
          <span className="error-msg">This field is required</span>
        )}
        <label htmlFor="country">Country:</label>
        <select name="country" {...register("country", { required: true })}>
          <option value="" disabled selected hidden>
            Select option
          </option>
          <option value="argentina">Argentina</option>
          <option value="brazil">Brazil</option>
          <option value="paraguay">Paraguay</option>
        </select>
        {errors.country && (
          <span className="error-msg">This field is required</span>
        )}
        <br />
        <Button text="Register me" className="green" type="submit" />
      </form>
    </div>
  );
};

export default Form;
