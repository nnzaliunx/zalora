import { useNavigate } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";

const ProfilePage = ({ token }) => {
  const navigate = useNavigate();
  function handleLogOut() {
    sessionStorage.removeItem("token");
    navigate("/");
  }
  return (
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
          {" "}
          {token.user.user_metadata.full_name}
        </p>
        <p className="text-sm text-gray-500">
          Invitation Code: {token.user.user_metadata.code}
        </p>
        <p className="text-sm text-gray-500">credit score: 100</p>

        <div className="mt-6 flex bg-[#4A03FF] text-white items-center justify-between rounded-md px-6 py-4 text-sm mb-4 ">
          <div className="border-r-2 flex-1">
            <p>$-67.72</p>
            <p>Account Balance</p>
          </div>
          <div className="flex-1 text-end">
            <p>$230.00</p>
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
  );
};

export default ProfilePage;
