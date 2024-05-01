import React, { useState, useEffect } from "react";
import { MdOutlineTouchApp } from "react-icons/md";
import { IconContext } from "react-icons";
import { FaDollarSign } from "react-icons/fa";
import { supabase } from "../../supabase";

import ProductTask from "./ProductTask";

const TaskCard = ({ token }) => {
  const [showModal, setShowModal] = useState(false);
  const [showInnerModal, setInnerModal] = useState(false);
  const [orderLimit, setOrderLimit] = useState(28);
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
      setOrderLimit(userData.task_limit);
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

  async function handleModal() {
    if (orderCount < orderLimit) {
      setShowModal(true);
    } else {
      alert(
        "Thank you for the review. You've reached today's limit. Please come back tomorrow.",
      );
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
    } catch (error) {
      console.error("Error saving user data:", error.message);
    }
  }

  useEffect(() => {
    const savedFlag = localStorage.getItem("dataSaved");
    if (savedFlag) {
      setDataSaved(true);
    }
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
        <div className="flex justify-center items-center h-screen">
          <span className="loading loading-ring loading-lg text-indigo-700"></span>
        </div>
      ) : (
        <div className="card w-full shadow-lg  border-2 border-indigo-100 mt-4">
          <div className="bg-indigo-700 text-white rounded-xl p-4">
            <h3 className="text-lg uppercase font-bold mb-4">
              Member Acivities
            </h3>
            <p className="text-base font-semibold uppercase mb-4">
              New Member Order Limit: 28
            </p>
            <p className="text-base font-semibold uppercase">
              Commission Ratio: 1.00%
            </p>
          </div>

          <div className="card-body mx-4 px-0 text-indigo-950 ">
            <div className="flex justify-between items-center font-semibold pb-4 border-b-2 ">
              <div>
                <p className="flex items-center  text-base ">
                  <FaDollarSign size={12} /> {earned}
                </p>
                <p className="text-sm">Earned Amount</p>
              </div>
              <div>
                <p className=" flex items-center justify-end text-base pb-2">
                  <FaDollarSign size={12} /> {frozen}
                </p>
                <p className="text-sm">Frozen Amount</p>
              </div>
            </div>
            <div className="flex justify-between pb-4 pt-2 text-base  items-center font-semibold">
              <div>
                <p className="mr-2 text-base">
                  {orderCount}/{orderLimit}
                </p>
                <p className="text-sm">Completed Tasks</p>
              </div>
              <div>
                <p className="flex items-center justify-end text-base ">
                  <FaDollarSign size={12} /> {balance}
                </p>
                <p className="text-sm">Available Balance</p>
              </div>
            </div>

            <div className="card-actions">
              <button
                className="btn bg-indigo-700 rounded-full hover:text-white uppercase w-full text-white text-base"
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
                        orderLimit={orderLimit}
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
      <div className="card w-full bg-base-100 shadow-sm mt-6">
        <div className="card-body mx-4 px-0 ">
          <h2 className="card-title text-lg mb-2">Order Description</h2>
          <ul className="list-decimal leading-relaxed text-sm mx-2">
            <li className="pb-4">
              {" "}
              On the new member's first day, the order limit is 28. The next
              day, the order limit increases by 1.
            </li>
            <li className="pb-4">
              The commission for placing an order is uniform and equals to 1.00%
              of the total order amount
            </li>
            <li className="pb-4">
              The System is based on LBS technology and automatically matches
              goods through cloud computing
            </li>
            <li className="pb-4">
              In order to prevent platform supervision, if the order is not
              confirmed and submitted within 30 minutes, the system will freeze
              the order amount
            </li>
            <li className="pb-4">
              You cannot cancel the task. You must first complete any existing
              unfinished tasks before you can receive new ones.
            </li>
          </ul>
          <h2 className="card-title text-lg mb-2">Notice</h2>
          <p className="leading-loose text-sm mb-16">
            When the platform matches orders for users, it will submit the order
            information to the merchant background. if the user does not submit
            the order within 30 minutes, the order amount will be frozen by the
            system. in order to avoid regulatory stytems, user accounts will be
            evaluated, which will directly affect the user's next matching time
            and reputation!. Please click stop placing order in time to avoid
            timeout freeze.
          </p>
        </div>
      </div>
    </>
  );
};

export default TaskCard;
