import React from "react";
import Button from "../shared/Button";

const Card = () => {
  return (
    <div className="card w-full shadow-2xl shadow-indigo-300 mx-auto mt-8">
      <div className="card-body items-center text-center mb-4">
        <p className="card-title text-base font-semibold ">
          Join Our Platform - Login or Register
        </p>
        <Button to={"login"} text={"Member Login"} />
        <Button to={"register"} type="outline" text={"Register Now"} />
      </div>
    </div>
  );
};

export default Card;
