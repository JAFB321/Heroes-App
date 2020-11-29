import React, { useReducer, useEffect } from "react";
import { AuthContext } from "./auth/AuthContext";
import { authReducer } from "./auth/authReducer";
import { AppRouter } from "./routers/AppRouter";

const init = () => {
  const storedUser = localStorage.getItem("user");
  
  return (
    JSON.parse(storedUser) || {
      logged: false,
    }
  );
};

const storeUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const HeroesApp = () => {
  const [user, dispatch] = useReducer(authReducer, {}, init);

  useEffect(() => {
    storeUser(user);
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      <AppRouter />
    </AuthContext.Provider>
  );
};
