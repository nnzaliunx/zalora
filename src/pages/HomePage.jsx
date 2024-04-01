import React from "react";

import AutoSlider from "../components/Home/AutoSlider";
import HandSlider from "../components/Home/HandSlider";
import AnimatePara from "../components/Home/AnimatePara";
import Faq from "../components/Home/Faq";
import Brand from "../components/Home/Brand";
import { Link } from "react-router-dom";
import { MdOutlineTouchApp } from "react-icons/md";
import { IconContext } from "react-icons";

const HomePage = () => {
  return (
    <>
      <div className="bg-white text-black mt-16  pt-4 ">
        <AutoSlider />
        <h3 className="mt-4 text-lg font-semibold">Daily Tasks</h3>
        <p className="text-sm text-slate-400">
          Urgent tasks mean higher commissions.
        </p>
        <HandSlider />
        <Link
          to="/task"
          className="btn bg-indigo-700  hover:text-white hover:bg-black uppercase hover:border-none w-full text-white text-base mt-4"
        >
          <IconContext.Provider value={{ color: "white", size: "20px" }}>
            <MdOutlineTouchApp />
          </IconContext.Provider>
          Start Grapping Orders
        </Link>
        <AnimatePara />
      </div>
      <div className=" mt-28 bg-white w-full ">
        <h3 className=" text-lg font-semibold">Partnership Brands</h3>
        <p className="text-sm text-slate-400">Brand Friendly Partners</p>
        <Brand />
      </div>
      <div className=" pt-6 pb-24 bg-white">
        <h3 className=" text-lg font-semibold">Service Center</h3>
        <p className=" text-slate-400 text-sm">
          if you have any other questions, please go to the customer service
          center
        </p>
        <Faq />
      </div>
    </>
  );
};

export default HomePage;
