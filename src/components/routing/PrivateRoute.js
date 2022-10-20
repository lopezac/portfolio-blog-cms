import { useNavigate, Outlet } from "react-router-dom";
import useAuth from "@hooks/useAuth";
import { useEffect } from "react";

export default function PrivateRoute() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/sign-in");
    }
  }, [user]);

  return <Outlet />;
}
