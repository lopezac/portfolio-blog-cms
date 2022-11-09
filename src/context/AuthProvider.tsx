import { createContext, useState, useMemo, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { SessionStorage } from "src/services";

type IAuthContext = { user: string | null };
type ProviderValue = {
  user: string | null;
  signIn: (data: string) => void;
  signOut: () => void;
};

export const AuthContext = createContext<IAuthContext>({ user: null });

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState(SessionStorage.get("user"));
  const navigate = useNavigate();

  const signIn = (data: string) => {
    setUser(data);
    SessionStorage.set("user", data);
    navigate("/posts");
  };

  const signOut = () => {
    setUser(null);
    SessionStorage.set("user", null);
    navigate("/");
  };

  const value: ProviderValue = useMemo(
    () => ({ user, signIn, signOut }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
