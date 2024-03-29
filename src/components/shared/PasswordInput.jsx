import { BiSolidShow, BiSolidHide } from "react-icons/bi";
import { useState } from "react";

const PasswordInput = () => {
  const [showPassword, setShowPassword] = useState(false);

  // Define the type variable based on the showPassword state
  const type = showPassword ? "text" : "password";

  const handleShowPassword = () => {
    // Update the state to toggle showPassword
    setShowPassword(!showPassword);
  };

  return (
    <>
      <span className="label label-text font-bold text-sm">
        Enter Password*
      </span>
      <div className="input input-primary items-center relative">
        <input type={type} className="input-field" />
        <button
          type="button"
          onClick={handleShowPassword}
          className="show-password-icon"
        >
          {showPassword ? (
            <BiSolidShow size={"20px"} />
          ) : (
            <BiSolidHide size={"20px"} />
          )}
        </button>
      </div>
    </>
  );
};

export default PasswordInput;
