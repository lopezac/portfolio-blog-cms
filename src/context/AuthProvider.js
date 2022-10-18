import { createContext, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { LocalStorage } from "@services";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(LocalStorage.get("user"));
  const navigate = useNavigate();
  // "null" !== null
  const signIn = (data) => {
    setUser(data);
    LocalStorage.set("user", data);
    navigate("/posts");
  };

  const signOut = () => {
    setUser(null);
    LocalStorage.set("user", null);
    navigate("/");
  };

  const value = useMemo(() => ({ user, signIn, signOut }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
