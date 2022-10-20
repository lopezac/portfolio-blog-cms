import { createContext, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { SessionStorage } from "@services";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(SessionStorage.get("user"));
  const navigate = useNavigate();

  const signIn = (data) => {
    setUser(data);
    SessionStorage.set("user", data);
    navigate("/posts");
  };

  const signOut = () => {
    setUser(null);
    SessionStorage.set("user", null);
    navigate("/");
  };

  const value = useMemo(() => ({ user, signIn, signOut }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
