import { BiSolidShow, BiSolidHide } from "react-icons/bi";
import { useState } from "react";
import { supabase } from "../../supabase";
import Error from "../shared/Error";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ setToken }) => {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // Update to use state for error message
  let navigate = useNavigate();

  // Define the type variable based on the showPassword state
  const type = showPassword ? "text" : "password";

  const handleShowPassword = () => {
    // Update the state to toggle showPassword
    setShowPassword(!showPassword);
  };

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { error, data } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });
      setLoading(false);
      if (data && !error) {
        setToken(data);
        sessionStorage.setItem("token", JSON.stringify(data));
        navigate("/home");
      } else {
        setErrorMessage(error.message);
      }
    } catch (error) {
      setLoading(false);
      setErrorMessage(error.message);
    }
  };
  return (
    <form className="w-full" onSubmit={handleSubmit}>
      {errorMessage && <Error msg={errorMessage} />}
      <label className="form-control w-full mt-2">
        <span className="label label-text font-bold text-sm">Enter Email</span>
        <div className="flex items-center input input-bordered input-primary w-full flex-2 text-sm">
          <input
            type="email"
            name="email" // Set name attribute to "email"
            placeholder="Enter Email"
            className="grow"
            required
            onChange={handleChange}
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
            name="password" // Set name attribute to "password"
            className="input-field text-sm"
            placeholder="Enter Password"
            onChange={handleChange}
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
      <button
        type="submit"
        className="btn bg-indigo-700  hover:text-white hover:bg-black uppercase hover:border-none w-full text-white text-base mt-4 "
      >
        {loading ? (
          <span className="loading loading-spinner text-white"></span>
        ) : (
          "Member Login"
        )}
      </button>
    </form>
  );
};

export default LoginForm;
