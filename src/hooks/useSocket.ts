import { useContext } from "react";
import { SocketContext } from "src/context/Socket";

export default function useSocket() {
  return useContext(SocketContext);
}
