import React from "react";
import { FaDollarSign } from "react-icons/fa";
import data from "../../data";
import { supabase } from "../../supabase";

const ProductTask = ({
  setLoading,
  setShowModal,
  orderCount,
  updateOrderCount,
  setEarned,
  setBalance,
  token,
}) => {
  console.log(token);
  // Function to generate random product data
  const getRandomProduct = () => {
    const randomIndex = Math.floor(Math.random() * data.length);
    return data[randomIndex];
  };
  const randomProduct = getRandomProduct();

  const name = randomProduct.name;
  const price = randomProduct.price;
  const quantity = randomProduct.quantity;
  const image = randomProduct.image;
  const unitPrice = (price / quantity).toFixed(2);
  const commission = (price * 0.01).toFixed(2);

  const earned = commission;

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

  // Modal Close
  const handleConfirm = async () => {
    setShowModal(false);
    try {
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
      <p className="py-4 text-center text-sm font-semibold">{name}</p>
      <img src={image} alt={name} className="rounded-box h-24 mb-4" />
      <div className="details">
        <div className="detail flex items-center mb-2">
          <p>Unit Price:</p>
          <p className="flex justify-end items-center font-medium">
            <FaDollarSign />
            {unitPrice}
          </p>
        </div>
        <div className="detail flex items-center mb-2">
          <p>Order Quantity:</p>
          <p className="text-end">{quantity}</p>
        </div>
        <div className="detail flex items-center mb-2">
          <p>Total:</p>
          <p className="flex justify-end items-center font-medium">
            <FaDollarSign />
            {price}
          </p>
        </div>
        <div className="detail flex items-center mb-2">
          <p>Commission:</p>
          <p className="flex justify-end items-center font-medium">
            <FaDollarSign />
            {commission}
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
