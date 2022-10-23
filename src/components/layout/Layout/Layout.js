import { Outlet } from "react-router-dom";
import { NavBar, Footer } from "../index";
import MainWrapper from "./MainWrapper";
import StyledMain from "./Main";

export default function Layout() {
  return (
    <>
      <NavBar />
      <StyledMain>
        <MainWrapper>
          <Outlet />
        </MainWrapper>
      </StyledMain>
      <Footer />
    </>
  );
}
