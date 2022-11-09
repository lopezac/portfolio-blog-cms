import { createContext, ReactNode } from "react";
import { io, Socket } from "socket.io-client";
import { getApiUrl } from "src/utils/various";

type TSocketContext = Socket | null;
type ServerToClientEvents = {};
type ClientToServerEvents = {
  "post:create": () => void;
  "post:update": () => void;
  "post:delete": () => void;
  "post:publish": () => void;
  "post:unpublish": () => void;
  "comment:create": () => void;
  "comment:update": () => void;
  "comment:delete": () => void;
};

export const SocketContext = createContext<TSocketContext>();

export const SocketProvider = ({ children }: { children: ReactNode }) => {
  const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(
    getApiUrl(),
    { transports: ["websocket"] }
  );

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};
