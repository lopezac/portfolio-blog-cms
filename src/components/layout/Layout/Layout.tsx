import { Outlet } from "react-router-dom";
import { NavBar, Footer } from "../index";
import MainWrapper from "./MainWrapper.styles";
import StyledMain from "./Main.styles";

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
