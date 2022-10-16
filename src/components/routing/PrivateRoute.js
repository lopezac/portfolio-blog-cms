import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/sign-in" />;
  }

  return (
    <div>
      <p>Protected boy</p>
      <Outlet />
    </div>
  );
}
