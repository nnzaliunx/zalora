import React from "react";
import { MdOutlineTouchApp } from "react-icons/md";
import { IconContext } from "react-icons";
import { useState } from "react";
import { FaDollarSign } from "react-icons/fa";

const TaskCard = () => {
  let orderLimit = 38;
  const [balance, setBalance] = useState(10);
  const [earned, setEarned] = useState(97.98);
  const [frozen, setFrozen] = useState(0);
  const [orderCount, setOrderCount] = useState(0);
  return (
    <div className="card w-full  shadow-lg  border-2 border-indigo-100">
      <div className="bg-indigo-700 text-white rounded-lg p-6">
        <h3 className="text-xl  uppercase font-bold mb-4">
          New Member Acivities
        </h3>
        <p className="text-sm font-semibold uppercase mb-4">Daily Orders: 38</p>
        <p className="text-sm font-semibold uppercase">
          Commission Ratio: 1.00%
        </p>
      </div>

      <div className="card-body mx-4 px-0 text-indigo-950 uppercase">
        <div className="flex justify-between items-center text-sm font-semibold  pb-4 border-b-2 ">
          <div>
            <p className="flex items-center text-base ">
              <FaDollarSign /> {earned.toFixed(2)}
            </p>
            <p>Earned Amount</p>
          </div>
          <div>
            <p className=" flex items-center justify-end  text-base">
              {" "}
              <FaDollarSign /> {frozen.toFixed(2)}
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
              <FaDollarSign className="" /> {balance.toFixed(2)}
            </p>
            <p>Available balance</p>
          </div>
        </div>

        <div className="card-actions">
          <button
            className="btn bg-indigo-700  hover:text-white hover:bg-black uppercase hover:border-none w-full text-white text-base mt-4"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            <IconContext.Provider value={{ color: "white", size: "20px" }}>
              <MdOutlineTouchApp />
            </IconContext.Provider>
            Start Taking Orders
          </button>
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
