import { useNavigate } from "react-router-dom";

const ProfilePage = ({ token }) => {
  const navigate = useNavigate();
  function handleLogOut() {
    sessionStorage.removeItem("token");
    navigate("/");
  }
  return (
    <div className="mt-20">
      <h1>Welcom {token.user.user_metadata.full_name}</h1>
      <p>Invitation code: {token.user.user_metadata.code}</p>
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
