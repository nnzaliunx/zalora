import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header";
import MainWrapper from "../components/shared/MainWrapper";

const InitalLayout = () => {
  return (
    <>
      <MainWrapper>
        <Header /> <Outlet />
      </MainWrapper>
    </>
  );
};

export default InitalLayout;
