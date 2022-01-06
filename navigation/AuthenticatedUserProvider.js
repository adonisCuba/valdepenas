import React, { useState, createContext, useEffect } from "react";
import { TokenService } from "../services/token.service";

export const AuthenticatedUserContext = createContext({});

export const AuthenticatedUserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(async () => {
    const tUser = await TokenService.getUser();
    setUser(tUser);
    setIsLoading(false);
  });
  return (
    <AuthenticatedUserContext.Provider
      value={{ user, setUser, isLoading, setIsLoading }}
    >
      {children}
    </AuthenticatedUserContext.Provider>
  );
};
