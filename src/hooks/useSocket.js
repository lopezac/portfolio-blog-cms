import { useContext } from "react";
import { SocketContext } from "@context/Socket";

export default function useSocket() {
  return useContext(SocketContext);
}
