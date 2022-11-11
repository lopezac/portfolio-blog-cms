import { useNavigate, Outlet } from "react-router-dom";
import { useEffect } from "react";
import useAuth from "src/hooks/useAuth";

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
