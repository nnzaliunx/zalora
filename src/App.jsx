import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import InitialLayout from "./Layout/InitialLayout";
import HomePage from "./pages/HomePage";

const App = () => {
  let navigate = useNavigate();
  const [token, setToken] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      let data = JSON.parse(sessionStorage.getItem("token"));
      setToken(data);
    } else {
      navigate("/");
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<InitialLayout />}>
        <Route index element={<IndexPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage setToken={setToken} />} />
      </Route>
      {/* Only render HomePage if token exists */}
      {token && <Route path="/home" element={<HomePage token={token} />} />}
    </Routes>
  );
};

export default App;
