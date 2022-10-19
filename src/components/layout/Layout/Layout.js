import { Outlet } from "react-router-dom";
import { NavBar, Footer } from "../index";
import { UserProvider } from "@context/UserProvider";

export default function Layout() {
  return (
    <UserProvider>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </UserProvider>
  );
}
