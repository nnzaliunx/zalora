import React from "react";

import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="card w-full shadow-2xl shadow-indigo-300 mx-auto mt-8">
      <div className="card-body items-center text-center mb-4">
        <p className="card-title text-base font-semibold ">
          Join Our Platform - Login or Register
        </p>
        <Link
          to="/login"
          className="btn bg-indigo-700  hover:text-white hover:bg-black uppercase hover:border-none w-full text-white text-base mt-4 "
        >
          Member Login
        </Link>
        <Link
          to="/register"
          className="btn  bg-black hover:bg-indigo-700 hover:text-white uppercase hover:border-none border-black w-full text-white text-base mt-4"
        >
          Register now
        </Link>
      </div>
    </div>
  );
};

export default Card;
