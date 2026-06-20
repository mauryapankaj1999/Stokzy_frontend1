"use client";
import { createContext, useContext, useState, useEffect } from "react";
const AuthContext = createContext<any>(null);

export function AuthProvider({
  children,
}: {
  children: any;
}) {
  const [user, setUser] = useState<any>(null);
  const [openLogin, setOpenLogin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setUser({ token });
    }
  }, []);

  const login = (token: string, userData?: any) => {
    localStorage.setItem("token", token);
    setUser(userData || { token });
    setOpenLogin(false);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        openLogin,
        setOpenLogin,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
// export const useAuth = () =>  useContext(AuthContext);