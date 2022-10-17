import { createContext, useState, useMemo } from "react";
import { redirect } from "react-router-dom";
import { LocalStorage } from "@services/LocalStorage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(LocalStorage.get("user"));

  const login = (data) => {
    setUser(data);
    LocalStorage.set("user", data);
    redirect("/posts");
  };

  const logout = () => {
    setUser(null);
    redirect("/");
  };

  const value = useMemo(() => ({ user, login, logout }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
