import Input from "../shared/Input";
import Button from "../shared/Button";
import PasswordInput from "../shared/PasswordInput";

const Form = () => {
  return (
    <form className="w-full">
      <Input label="Enter Email" type="email" placeholder="Email Address" />
      <PasswordInput />
      <Button to="register" text="Member Login" />
    </form>
  );
};

export default Form;
