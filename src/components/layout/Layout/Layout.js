import { Outlet } from "react-router-dom";
import { NavBar, Footer } from "../index";

export default function Layout() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
