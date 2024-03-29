import React from "react";
import { Link } from "react-router-dom";

const Button = ({ to, type, text, onclick = null }) => {
  let btnStyle = `btn bg-indigo-700  hover:text-white hover:bg-black uppercase hover:border-none w-full text-white text-base mt-4`;
  if (type === "outline") {
    btnStyle = `btn  bg-black hover:bg-indigo-700 hover:text-white uppercase hover:border-none border-black w-full text-white text-base mt-4`;
  }
  return (
    <Link to={`/${to}`} className={btnStyle} onClick={onclick}>
      {text}
    </Link>
  );
};

export default Button;
