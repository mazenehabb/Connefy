import { useState, type ReactNode } from "react";
import type { User } from "../types/auth";
import { AuthContext } from "./AuthContext";

interface AuthProviderProps {
  children: ReactNode;
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const [token, setTokenState] = useState<string | null>(() => {
    return localStorage.getItem("token") || null;
  });
  const [user, setUserState] = useState<User | null>(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // 2. Update token
  function setToken(newToken: string) {
    setTokenState(newToken);
    localStorage.setItem("token", newToken);
  }

  // 3. Update user
  function setUser(newUser: User) {
    setUserState(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
  }

  // 4. Logout
  function logout() {
    setTokenState(null);
    setUserState(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }

  return (
    <AuthContext.Provider
      value={{ token, setToken, user, setUser, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
