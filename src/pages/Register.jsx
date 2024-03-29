import React from "react";
import { Link } from "react-router-dom";
import RegisterForm from "../components/register/RegisterForm";

const Register = () => {
  return (
    <div className="flex flex-col justify-center items-center mx-2">
      <div className="card w-full shadow-2xl shadow-indigo-300 mx-auto ">
        <div className="card-body text-center mb-4">
          <h2 className="card-title text-xl font-semibold">
            Register to Your Account
          </h2>

          <p className="text-sm text-left">
            Already have an account?
            <Link
              to="/login"
              className="text-indigo-700 underline underline-offset-4 pl-1"
            >
              Login
            </Link>
          </p>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default Register;
