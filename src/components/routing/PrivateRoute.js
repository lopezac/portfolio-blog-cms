import { redirect, Outlet } from "react-router-dom";
import useAuth from "@hooks/useAuth";

export default function PrivateRoute() {
  const { user } = useAuth();

  if (!user) {
    redirect("/sign-in");
  }

  return <Outlet />;
}
