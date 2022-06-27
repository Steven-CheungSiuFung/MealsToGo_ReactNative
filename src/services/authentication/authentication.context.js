import React, { createContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import {
  loginRequest,
  registerRequest,
  logoutRequest,
} from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((u) => {
        setUser(u.user);
        setIsAuthenticated(true);
        setError(null);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.code);
        setIsLoading(false);
      });
  };

  const onRegester = (email, password, repeatedPassword) => {
    setIsLoading(true);
    if (password !== repeatedPassword) {
      setError("Error: password not match");
      setIsLoading(false);
    } else {
      registerRequest(email, password)
        .then((u) => {
          setUser(u.user);
          setIsAuthenticated(true);
          setError(null);
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err.code);
          setIsLoading(false);
        });
    }
  };

  const onLogout = () => {
    setIsLoading(true);
    logoutRequest()
      .then(() => {
        setUser(null);
        setIsAuthenticated(false);
        setError(null);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.code);
        setIsLoading(false);
      });
  };

  const checkAuth = () => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsAuthenticated(true);
      }
    });
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isAuthenticated,
        isLoading,
        error,
        onLogin,
        onRegester,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
