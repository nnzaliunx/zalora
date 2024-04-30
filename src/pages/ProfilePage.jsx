import { useNavigate } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useState, useEffect } from "react";
import { supabase } from "../supabase";

const ProfilePage = ({ token }) => {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(null);
  const [balance, setBalance] = useState(0);
  const [frozen, setFrozen] = useState(0)
  const navigate = useNavigate();
  function handleLogOut() {
    sessionStorage.removeItem("token");
    navigate("/");
  }
  useEffect(() => {
    fetchUserData();
  }, []);

  useEffect(() => {
    if (userData) {
      setBalance(userData.balance.toFixed(2));
      setFrozen(userData.frozen_balance.toFixed(2));
    }
  }, [userData]);

  async function fetchUserData() {
    try {
      setLoading(true); // Set loading to true when fetching data

      const user = token.user.id;
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
        setLoading(false);
      }
    } catch (error) {
      console.log("Error fetching user data:", error.message);
      setLoading(false); // Set loading to false in case of error
    }
  }

  return (
    <>
      {loading ? (
        // Show loading message if data is being fetched
        <div className="flex justify-center items-center h-screen">
          <span className="loading loading-ring loading-lg text-indigo-700"></span>
        </div>
      ) : (
        <div className="max-w-2xl mx-auto px-4 pt-24  bg-white text-black">
          <div className="flex flex-col mx-2 pb-6">
            <div className="flex items-center justify-between ">
              <div>
                <IconContext.Provider value={{ size: "56px" }}>
                  <FaCircleUser />
                </IconContext.Provider>
              </div>
              <div className="flex flex-col">
                <button className="btn btn-primary text-white px-6 text-xs rounded-full mb-2">
                  Withdrawal
                </button>
                <button className="btn btn-primary text-white px-6 text-xs rounded-full">
                  Deposit
                </button>
              </div>
            </div>
            <p className="font-bold text-xl">
              {token.user.user_metadata.full_name}
            </p>
            <p className="text-sm text-gray-500">
              Invitation Code: {token.user.user_metadata.code}
            </p>
            <p className="text-sm text-gray-500">credit score: 100</p>

            <div className="mt-6 flex bg-[#4A03FF] text-white items-center justify-between rounded-md px-6 py-4 text-sm mb-4 ">
              <div className="border-r-2 flex-1">
                <p>${balance}</p>
                <p>Account Balance</p>
              </div>
              <div className="flex-1 text-end">
                <p>${frozen}</p>
                <p>Frozen Balance</p>
              </div>
            </div>
          </div>

          <button
            className="btn bg-indigo-700  hover:text-white hover:bg-black uppercase hover:border-none w-full text-white text-base mt-4"
            onClick={handleLogOut}
          >
            Logout
          </button>
        </div>
      )}
    </>
  );
};

export default ProfilePage;
