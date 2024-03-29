import { BiSolidShow, BiSolidHide } from "react-icons/bi";
import { useState } from "react";

const RegisterFrom = () => {
  const [showPassword, setShowPassword] = useState(false);

  // Define the type variable based on the showPassword state
  const type = showPassword ? "text" : "password";

  const handleShowPassword = () => {
    // Update the state to toggle showPassword
    setShowPassword(!showPassword);
  };

  return (
    <form className="w-full">
      <label className="form-control w-full mt-2">
        <span className="label label-text font-bold text-sm">Enter Name</span>
        <div className="flex items-center input input-bordered input-primary w-full flex-2 text-sm">
          <input
            type="text"
            placeholder="Enter name"
            className="grow"
            required
          />
        </div>
      </label>
      <label className="form-control w-full mt-2">
        <span className="label label-text font-bold text-sm">Enter Email</span>
        <div className="flex items-center input input-bordered input-primary w-full flex-2 text-sm">
          <input
            type="email"
            placeholder="Enter Email"
            className="grow"
            required
          />
        </div>
      </label>
      <div>
        <span className="label label-text font-bold text-sm">
          Enter Password*
        </span>
        <div className="input input-primary items-center">
          <input
            type={type}
            className="input-field text-sm"
            placeholder="Enter Password"
          />
          <span onClick={handleShowPassword} className="show-password-icon">
            {showPassword ? (
              <BiSolidShow size={"20px"} />
            ) : (
              <BiSolidHide size={"20px"} />
            )}
          </span>
        </div>
      </div>
      <label className="form-control w-full mt-2">
        <span className="label label-text font-bold text-sm">
          Enter Invitation Code
        </span>
        <div className="flex items-center input input-bordered input-primary w-full flex-2 text-sm">
          <input
            type="text"
            placeholder="Invitation Code"
            className="grow"
            required
          />
        </div>
      </label>
      <button className="btn bg-indigo-700  hover:text-white hover:bg-black uppercase hover:border-none w-full text-white text-base mt-4 ">
        register now
      </button>
    </form>
  );
};

export default RegisterFrom;
