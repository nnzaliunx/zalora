import { BiSolidShow, BiSolidHide } from "react-icons/bi";
import { useState } from "react";
import { supabase } from "../../supabase";
import Error from "../shared/Error";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // Update to use state for error message
  const navigate = useNavigate();

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

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true); // Set loading state to true when submitting form
    if (formData.password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long."); // Update error message state
      setLoading(false);
      return; // Prevent further execution
    }
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });
      setLoading(false);
      if (!error && data) {
        // Redirect to login page upon successful signup
        navigate("/home");
      }
    } catch (error) {
      setLoading(false);
      setErrorMessage(error.message); // Update error message state
    }
  }
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
