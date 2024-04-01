import React from "react";
import { useState } from "react";
import { FaDollarSign } from "react-icons/fa";

const ProductTask = ({ product }) => {
  const [selectedOption, setSelectedOption] = useState("option1");
  const [isChecked, setIsChecked] = useState(false);
  let name = product.name;
  let unitPrice = (product.price / product.quantity).toFixed(2);
  let image = product.image;
  let quantity = product.quantity;
  let totalprice = product.price;
  let commission = (product.price * 0.01).toFixed(2);

  const handleconfirm = () => {};

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <>
      <h3 className="font-bold text-lg">Order task</h3>
      <p className="py-4 text-center text-sm font-semibold">{name}</p>
      <img src={image} className="rounded-box h-24" />
      <div className="flex justify-between w-full font-medium text-sm mt-6">
        <p>Unit Price:</p>
        <p className="flex justify-end items-center font-medium">
          <FaDollarSign />
          {unitPrice}
        </p>
      </div>
      <div className="flex justify-between w-full font-medium  text-sm mt-2">
        <p>Order Quantity:</p>
        <p className="text-end">{quantity}</p>
      </div>
      <div className="flex justify-between w-full font-medium  text-sm mt-2">
        <p>Total:</p>
        <p className="flex justify-end items-center font-medium">
          <FaDollarSign />
          {totalprice}
        </p>
      </div>
      <div className="flex justify-between w-full font-medium text-sm  mt-2 text-indigo-700">
        <p>Commission:</p>
        <p className="flex justify-end items-center font-medium">
          <FaDollarSign />
          {commission}
        </p>
      </div>

      <div className="card w-full bg-indigo-200 shadow-sm mt-6">
        <div className="card-body px-4 py-6">
          <div className="rating gap-2 mb-2">
            <p className="text-sm">Ratings:</p>
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-indigo-700"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-indigo-700"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-indigo-700"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-indigo-700"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-indigo-700"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
          </div>
          <p className="text-sm">Select Your Reviews:</p>
          <select
            value={selectedOption}
            onChange={handleSelectChange}
            className="select select-primary w-full max-w-xs"
          >
            <option value="option1">Amazing product! Highly recommend!</option>
            <option value="option2">Love it! Great quality!</option>
            <option value="option3">Impressive! Must-have item!</option>
            <option value="option4">Incredible value! 5 stars!</option>
            <option value="option5">Perfect fit! Highly satisfied!</option>
          </select>
        </div>
      </div>
      <button
        className="btn btn-primary text-white  w-full text-base mt-4 rounded-full"
        onClick={handleconfirm}
      >
        Confirm Review
      </button>
    </>
  );
};

export default ProductTask;
