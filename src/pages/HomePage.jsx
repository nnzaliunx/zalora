import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = ({ token }) => {
  const navigate = useNavigate();
  function handleLogOut() {
    sessionStorage.removeItem("token");
    navigate("/");
  }
  return (
    <div>
      <h1>Welcom {token.user.user_metadata.full_name}</h1>
      <p>Invitation code: {token.user.user_metadata.code}</p>
      <button onClick={handleLogOut}>Logout</button>
    </div>
  );
};

export default HomePage;
