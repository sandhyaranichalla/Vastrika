import React, { createContext, useState,useEffect } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(
  JSON.parse(localStorage.getItem("user")) || null
);
// useEffect() => {
useEffect(() => {
  const savedUser = localStorage.getItem("user");
  if (savedUser) {
    setUser(JSON.parse(savedUser));
  }
}, []);
  const login = (userData, token) => {
  setUser(userData);
  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(userData));
};

  const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
  setUser(null);
};

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
