import { AiOutlineHome } from "react-icons/ai";
import { FaCartArrowDown } from "react-icons/fa6";
import { FaTasks } from "react-icons/fa";
import { IconContext } from "react-icons";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { NavLink } from "react-router-dom";

const NavigationButton = ({ to, icon, label }) => {
  return (
    <NavLink
      to={to}
      activeclassname="active"
      className="nav-button text-sm"
      exact="true"
    >
      {icon}
      <span className="btm-nav-label text-xs font-medium ">{label}</span>
    </NavLink>
  );
};

const BottomNav = () => {
  return (
    <div className="btm-nav max-w-2xl mx-auto shadow-lg divide-x divide-blue-100 z-50">
      <NavigationButton
        to="/home"
        icon={
          <IconContext.Provider value={{ size: "18px" }}>
            <AiOutlineHome />
          </IconContext.Provider>
        }
        label="Home"
      />

      <NavigationButton
        to="/task"
        icon={
          <IconContext.Provider value={{ size: "18px" }}>
            <FaTasks />
          </IconContext.Provider>
        }
        label="Task"
      />
      <NavigationButton
        to="/service"
        icon={
          <IconContext.Provider value={{ size: "18px" }}>
            <IoChatboxEllipsesOutline />
          </IconContext.Provider>
        }
        label="Service"
      />
      <NavigationButton
        to="/profile"
        icon={
          <IconContext.Provider value={{ size: "18px" }}>
            <CgProfile />
          </IconContext.Provider>
        }
        label="Profile"
      />
    </div>
  );
};

export default BottomNav;
