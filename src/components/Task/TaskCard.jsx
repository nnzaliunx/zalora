import React, { useState, useEffect } from "react";
import { MdOutlineTouchApp } from "react-icons/md";
import { IconContext } from "react-icons";
import { FaDollarSign } from "react-icons/fa";
import { supabase } from "../../supabase";

import ProductTask from "./ProductTask";

const TaskCard = ({ token }) => {
  const [showModal, setShowModal] = useState(false);
  const [showInnerModal, setInnerModal] = useState(false);
  let orderLimit = 20;
  const [orderCount, setOrderCount] = useState(0);
  const [userData, setUserData] = useState(null);
  const [balance, setBalance] = useState(20);
  const [earned, setEarned] = useState(0);
  const [loading, setLoading] = useState(false);
  const [frozen, setFrozen] = useState(0);
  const [dataSaved, setDataSaved] = useState(false);
  // Function to get current user's ID
  async function getCurrentUserID() {
    try {
      const user = (await supabase.auth.getUser()).data.user.id;
      return user;
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }

  useEffect(() => {
    fetchUserData();
  }, []);

  useEffect(() => {
    const subscription = supabase
      .channel(`user_data:user_id=eq.${getCurrentUserID()}`)
      .on("UPDATE", (payload) => {
        // Update user data when changes occur
        setUserData(payload.new);
      })
      .subscribe();

    return () => {
      // Unsubscribe from the real-time subscription when component unmounts
      subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (userData) {
      setBalance(userData.balance.toFixed(2));
      setOrderCount(userData.task_completed);
      setEarned(userData.earned_amount.toFixed(2));
      setFrozen(userData.frozen_balance);
      setLoading(false);
    }
  }, [userData]);

  async function fetchUserData() {
    try {
      setLoading(true); // Set loading to true when fetching data

      const user = await getCurrentUserID();
      if (user) {
        const { data, error } = await supabase
          .from("user_data")
          .select("*")
          .eq("user_id", user)
          .single();
        if (error) {
          throw error;
        }
        if (!data) {
          // If no data is returned, set loading to false
          setLoading(false);
        }
        setUserData(data);
      }
    } catch (error) {
      console.log("Error fetching user data:", error.message);
      setLoading(false); // Set loading to false in case of error
    }
  }

  function handleModal() {
    if (orderCount < orderLimit) {
      setShowModal(true);
    }
  }

  function handleInnerModal() {
    setInnerModal(true);
  }
  function handleInnerCloseModal() {
    setInnerModal(false);
  }

  async function saveUserData(balance, frozen, userId) {
    try {
      const { error: saveError } = await supabase.from("user_data").upsert({
        user_id: userId,
        balance: balance,
        frozen_balance: frozen,
      });

      if (saveError) {
        throw saveError;
      }

      console.log("User data saved successfully.");
    } catch (error) {
      console.error("Error saving user data:", error.message);
    }
  }

  useEffect(() => {
    const savedFlag = localStorage.getItem("dataSaved");
    if (savedFlag) {
      setDataSaved(true);
    }
    console.log(dataSaved);
  }, []);

  async function handleConfirm() {
    if (!dataSaved) {
      const storedProduct = JSON.parse(localStorage.getItem("currentProduct"));
      const userId = token.user.id;

      // Using the updated balance and frozen values
      const updatedFrozen = balance;
      const updatedBalance = balance - storedProduct.price;

      // Saving the updated user data
      saveUserData(updatedBalance, updatedFrozen, userId);

      // Set dataSaved to true to indicate that data has been saved
      setDataSaved(true);
      // Store the flag in localStorage
      localStorage.setItem("dataSaved", "true");

      // Reload the page after the data is saved
      window.location.reload();
    } else {
      setInnerModal(false);
      setShowModal(false);
    }
    setInnerModal(false);
    setShowModal(false);
  }

  // Callback function to update order count
  const updateOrderCount = (newOrderCount) => {
    setOrderCount(newOrderCount);
  };

  return (
    <>
      {loading ? (
        // Show loading message if data is being fetched
        <p>Loading...</p>
      ) : (
        <div className="card w-full  shadow-lg  border-2 border-indigo-100">
          <div className="bg-indigo-700 text-white rounded-lg p-6">
            <h3 className="text-xl  uppercase font-bold mb-4">
              New Member Acivities
            </h3>
            <p className="text-sm font-semibold uppercase mb-4">
              Daily Orders: 38
            </p>
            <p className="text-sm font-semibold uppercase">
              Commission Ratio: 1.00%
            </p>
          </div>

          <div className="card-body mx-4 px-0 text-indigo-950 uppercase">
            <div className="flex justify-between items-center text-sm font-semibold  pb-4 border-b-2 ">
              <div>
                <p className="flex items-center text-base ">
                  <FaDollarSign /> {earned}
                </p>
                <p>Earned Amount</p>
              </div>
              <div>
                <p className=" flex items-center justify-end  text-base">
                  <FaDollarSign /> {frozen}
                </p>
                <p>Frozen amount</p>
              </div>
            </div>
            <div className="flex justify-between pb-4 pt-4 text-sm items-center font-semibold">
              <div>
                <p className="mr-2 text-base">
                  {orderCount}/{orderLimit}
                </p>
                <p>Completed order</p>
              </div>
              <div>
                <p className="flex items-center justify-end text-base ">
                  <FaDollarSign className="" /> {balance}
                </p>
                <p>Available balance</p>
              </div>
            </div>

            <div className="card-actions">
              <button
                className="btn bg-indigo-700  hover:text-white hover:bg-black uppercase hover:border-none w-full text-white text-base mt-4"
                onClick={handleModal}
              >
                <IconContext.Provider value={{ color: "white", size: "20px" }}>
                  <MdOutlineTouchApp />
                </IconContext.Provider>
                Start Taking Orders
              </button>
              {showModal && (
                <div className="backdrop">
                  <dialog id="my_modal_3" className="modal" open={showModal}>
                    <div className="modal-box">
                      <ProductTask
                        setShowModal={setShowModal}
                        orderCount={orderCount}
                        updateOrderCount={updateOrderCount}
                        setEarned={setEarned}
                        earned={earned}
                        balance={balance}
                        setBalance={setBalance}
                        setLoading={setLoading}
                        token={token}
                      />
                      <button
                        onClick={handleInnerModal}
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                      >
                        ✕
                      </button>
                    </div>
                  </dialog>
                </div>
              )}
              {showInnerModal && (
                <div className="backdrop">
                  <dialog
                    id="my_modal_1"
                    className="modal"
                    open={showInnerModal}
                  >
                    <div className="modal-box">
                      <h3 className="font-bold text-lg">
                        Are you sure you want to opt out of accepting the task?
                      </h3>
                      <p className="py-4">
                        The canceled task will automatically be frozen in the
                        task list
                      </p>
                      <div className="modal-action">
                        {/* if there is a button in form, it will close the modal */}
                        <button
                          onClick={handleInnerCloseModal}
                          className="btn bg-indigo-700 text-white "
                        >
                          Continue
                        </button>
                        <button
                          className="btn btn-error text-white"
                          onClick={handleConfirm}
                        >
                          Confirm Cancel
                        </button>
                      </div>
                    </div>
                  </dialog>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TaskCard;
