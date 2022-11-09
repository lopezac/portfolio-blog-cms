import { useContext } from "react";
import { AuthContext } from "src/context/AuthProvider";

export default function useAuth() {
  return useContext(AuthContext);
}
