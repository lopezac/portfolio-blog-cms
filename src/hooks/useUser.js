import { useContext } from "react";
import { UserContext } from "@context/UserProvider";

export default function useUser() {
  return useContext(UserContext);
}
