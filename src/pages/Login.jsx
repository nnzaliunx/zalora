import React from "react";
import Header from "../components/shared/Header";
import MainWrapper from "../components/shared/MainWrapper";
import { Link } from "react-router-dom";
import Form from "../components/login/Form";

const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-10 mx-2">
      <div className="card w-full shadow-2xl shadow-indigo-300 mx-auto mt-8">
        <div className="card-body items-center text-center mb-4">
          <h2 className="card-title text-xl font-semibol">
            Login to Your Account
          </h2>
          <p className="text-sm">
            Welcome back! Please sign in to access your account.
          </p>
          <p className="text-sm">
            New?
            <Link
              to="/register"
              className="text-indigo-700 underline underline-offset-4 pl-1"
            >
              Create an Account
            </Link>
          </p>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Login;
