// authContext.jsx
import React, { createContext, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = React.useState(localStorage.getItem("token"));

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  const isAuthenticated = () => {
    if (localStorage.getItem("token")) {
      if (token == null) {
        setToken(localStorage.getItem("token"));
      }
      return true;
    } else {
      return !!token;
    }
  };

  return (
    <AuthContext.Provider value={{ token, setToken, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
