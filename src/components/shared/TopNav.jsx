import { IconContext } from "react-icons";
import { IoNotifications } from "react-icons/io5";

export default function TopNav() {
  return (
    <div className="navbar bg-indigo-700 max-w-2xl mx-auto fixed top-0 left-0 right-0 z-50 ">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl text-white">Zalora</a>
      </div>
      <div className="flex-none">
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <IconContext.Provider value={{ color: "white", size: "20px" }}>
              <IoNotifications />
            </IconContext.Provider>

            <span className="badge badge-sm badge-ghost indicator-item"></span>
          </div>
        </button>
      </div>
    </div>
  );
}
