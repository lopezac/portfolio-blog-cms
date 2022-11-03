import { createContext } from "react";
import { io } from "socket.io-client";
import { getApiUrl } from "@utils/various";

export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const socket = io(getApiUrl(), { transports: ["websocket"] });

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};
