import React, { useState, useEffect } from "react";
import { FaDollarSign } from "react-icons/fa";
import data from "../../data";
import { supabase } from "../../supabase";

const ProductTask = ({
  setLoading,
  setShowModal,
  orderCount,
  updateOrderCount,
  setEarned,
  balance,
  setBalance,
  token,
}) => {
  const [currentProduct, setCurrentProduct] = useState(null);
  // adject ordercount start here
  const getRandomProduct = (balance, orderCount) => {
    let filteredData;

    // Filter products based on balance
    if (balance > 0) {
      // Filter products with prices less than or equal to the balance
      filteredData = data.filter((product) => product.price <= balance);
    } else {
      // If balance is 0 or negative, use a default max price or filter products with prices less than or equal to 20
      filteredData = data.filter((product) => product.price <= 20);
    }

    // If order count is 5, filter products with prices greater than the balance
    if (orderCount === 11) {
      filteredData = data.filter((product) => product.price > balance);
    }

    // If no products meet the criteria, return null
    if (filteredData.length === 0) {
      return null;
    }

    // Select a random product from the filtered data
    const randomIndex = Math.floor(Math.random() * filteredData.length);
    return filteredData[randomIndex];
  };

  useEffect(() => {
    // Check if there is a product stored in localStorage

    const storedProduct = JSON.parse(localStorage.getItem("currentProduct"));

    // If a product is stored in localStorage, use it as the current product
    if (storedProduct && orderCount === 11) {
      setCurrentProduct(storedProduct);
    } else {
      let newProduct;

      // Generate a new random product only if the order count is 5
      if (orderCount === 11) {
        newProduct = getRandomProduct(balance, orderCount);
      }

      // Save the new product to localStorage if it's generated
      if (newProduct) {
        localStorage.setItem("currentProduct", JSON.stringify(newProduct));
        setCurrentProduct(newProduct);
      }
      if (orderCount !== 11) {
        localStorage.removeItem("currentProduct");
        localStorage.removeItem("dataSaved");
        setCurrentProduct(getRandomProduct(balance, orderCount));
      }
    }
  }, [balance, orderCount]);
  // end here
  async function saveUserData(userId, earned, balance, count, email, fullName) {
    try {
      // Check if user data already exists
      const { data, error } = await supabase
        .from("user_data")
        .select("*")
        .eq("user_id", userId);

      if (error) {
        throw error;
      }
      let newEarnedAmount = earned;
      let newTotalAmount = balance;
      // If user data doesn't exist, insert new row
      if (!data || data.length === 0) {
        // Add an initial amount of +10 for new customers
        newTotalAmount = Number(newTotalAmount) + 20;

        const { error: saveError } = await supabase.from("user_data").insert([
          {
            user_id: userId,
            balance: newTotalAmount,
            earned_amount: newEarnedAmount,
            task_completed: count,
            email: email,
            name: fullName,
          },
        ]);

        if (saveError) {
          throw saveError;
        }
      } else {
        // If user data exists, update existing row with incremented earned amount
        const existingEarnedAmount = data[0].earned_amount;
        newEarnedAmount = Number(existingEarnedAmount) + Number(earned);
        const existingTotalAmount = data[0].balance;
        newTotalAmount = Number(existingTotalAmount) + Number(balance);
      }

      const { error: saveError } = await supabase.from("user_data").upsert({
        user_id: userId,
        balance: newTotalAmount,
        earned_amount: newEarnedAmount,
        task_completed: count,
        email: email,
        name: fullName,
      });

      if (saveError) {
        throw saveError;
      }

      console.log("User data saved successfully.");
    } catch (error) {
      console.error("Error saving user data:", error.message);
    }
  }
  const earned = currentProduct ? (currentProduct.price * 0.1).toFixed(2) : "";
  const handleConfirm = async () => {
    try {
      if (balance < currentProduct.price) {
        alert("Not enough balance. Please recharge.");
        return;
      }

      setShowModal(false);
      setLoading(true);
      const userId = token.user.id;
      const email = token.user.email;
      const fullName = token.user.user_metadata.full_name;
      await saveUserData(
        userId,
        earned,
        earned,
        orderCount + 1,
        email,
        fullName,
      );

      // Update order count in TaskCard component
      updateOrderCount(orderCount + 1);

      const { data, error } = await supabase
        .from("user_data")
        .select("*")
        .eq("user_id", userId)
        .single();

      if (error) {
        throw error;
      }

      // Update earned and balance states with the latest data
      if (data) {
        setEarned(data.earned_amount.toFixed(2));
        setBalance(data.balance.toFixed(2));
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h3 className="font-bold text-lg">Order task</h3>
      <p className="py-4 text-center text-sm font-semibold">
        {currentProduct ? currentProduct.name : "Loading..."}
      </p>
      <img
        src={currentProduct ? currentProduct.image : ""}
        alt={currentProduct ? currentProduct.name : ""}
        className="rounded-box h-24 mb-4"
      />
      <div className="details">
        <div className="detail flex items-center mb-2">
          <p>Unit Price:</p>
          <p className="flex justify-end items-center font-medium">
            <FaDollarSign />
            {currentProduct
              ? (currentProduct.price / currentProduct.quantity).toFixed(2)
              : ""}
          </p>
        </div>
        <div className="detail flex items-center mb-2">
          <p>Order Quantity:</p>
          <p className="text-end">
            {currentProduct ? currentProduct.quantity : ""}
          </p>
        </div>
        <div className="detail flex items-center mb-2">
          <p>Total:</p>
          <p className="flex justify-end items-center font-medium">
            <FaDollarSign />
            {currentProduct ? currentProduct.price : ""}
          </p>
        </div>
        <div className="detail flex items-center mb-2">
          <p>Commission:</p>
          <p className="flex justify-end items-center font-medium">
            <FaDollarSign />
            {currentProduct ? (currentProduct.price * 0.1).toFixed(2) : ""}
          </p>
        </div>
      </div>

      <div className="card w-full bg-indigo-200 shadow-sm mt-6">
        <div className="card-body px-4 py-6">
          <div className="rating gap-2 mb-2">
            <p className="text-sm">Ratings:</p>
            {[...Array(5)].map((_, index) => (
              <input
                key={index}
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-indigo-700"
              />
            ))}
          </div>
          <p className="text-sm">Select Your Reviews:</p>
          <select className="select select-primary w-full max-w-xs">
            <option value="option1">Amazing product! Highly recommend!</option>
            <option value="option2">Love it! Great quality!</option>
            <option value="option3">Impressive! Must-have item!</option>
            <option value="option4">Incredible value! 5 stars!</option>
            <option value="option5">Perfect fit! Highly satisfied!</option>
          </select>
        </div>
      </div>
      <button
        className="btn btn-primary text-white w-full text-base mt-4 rounded-full"
        onClick={handleConfirm}
      >
        Confirm Review
      </button>
    </>
  );
};

export default ProductTask;
