import React, { useState, createContext } from "react";

export const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [signIn, setSignIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  return (
    <UserContext.Provider
      value={{
        signIn,
        setSignIn,
        currentUser,
        setCurrentUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
