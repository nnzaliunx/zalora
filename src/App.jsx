import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import InitialLayout from "./Layout/InitialLayout";
import MainLayout from "./Layout/MainLayout";
import HomePage from "./pages/HomePage";
import TaskPage from "./pages/TaskPage";
import ServicePage from "./pages/ServicePage";
import ProfilePage from "./pages/ProfilePage";

const App = () => {
  let navigate = useNavigate();
  const [token, setToken] = useState(false);
  const [taskBalance, setTaskBalance] = useState(0);
  const [taskFrozen, setTaskFrozen] = useState(0)
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
      {token && (
        <Route path="/" element={<MainLayout />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/task" element={<TaskPage token={token} />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/profile" element={<ProfilePage token={token} />} />
        </Route>
      )}
    </Routes>
  );
};

export default App;
