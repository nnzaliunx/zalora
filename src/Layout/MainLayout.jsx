import { Outlet } from "react-router-dom";
import TopNav from "../components/shared/TopNav";
import BottomNav from "../components/shared/BottomNav";
import MainWrapper from "../components/shared/MainWrapper";

const InitalLayout = () => {
  return (
    <>
      <MainWrapper>
        <TopNav /> <Outlet /> <BottomNav />
      </MainWrapper>
    </>
  );
};

export default InitalLayout;
