import React, { createContext, useMemo, useContext } from "react";
import { io } from "socket.io-client";

const SocketContext = createContext(null);

export const useSocket = () => {
  const socket = useContext(SocketContext);
  return socket;
};

console.log("🚀 ~ SocketProvider ~ process.env.REACT_APP_API_URL:", process.env.REACT_APP_API_URL)
export const SocketProvider = (props) => {
  const socket = useMemo(() => io(process.env.REACT_APP_API_URL), []);
  return (
    <SocketContext.Provider value={socket}>
      {props.children}
    </SocketContext.Provider>
  );
};
