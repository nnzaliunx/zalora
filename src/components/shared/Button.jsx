import React from "react";
import { Link } from "react-router-dom";

const Button = ({ to, type, text }) => {
  let btnStyle = `btn bg-indigo-700 hover:btn-ouline hover:text-black hover:bg-white uppercase hover:border-black w-full text-white text-base mt-4`;
  if (type === "outline") {
    btnStyle = `btn btn-outline hover:bg-indigo-700 hover:text-white uppercase hover:border-none border-black w-full text-black text-base mt-4`;
  }
  return (
    <Link to={`/${to}`} className={btnStyle}>
      {text}
    </Link>
  );
};

export default Button;
