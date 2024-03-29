import Input from "../shared/Input";
import Button from "../shared/Button";
import PasswordInput from "../shared/PasswordInput";

const RegisterFrom = () => {
  return (
    <form className="w-full">
      <Input label="Name*" type="text" placeholder="Name" />
      <Input label="Email*" type="email" placeholder="Email" />
      <PasswordInput />
      <Input
        label="Invitation Code*"
        type="text"
        placeholder="Invitation Code"
      />
      <Button to="register" text="Member Register" />
    </form>
  );
};

export default RegisterFrom;
