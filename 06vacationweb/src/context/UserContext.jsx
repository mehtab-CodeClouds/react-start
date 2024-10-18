import React, { createContext, useState } from "react";

export const UserDataContext = createContext();

function UserContext({ children }) {
  const [username, setUsername] = useState("mehtab-CodeCLouds");

  return (
    <UserDataContext.Provider value={{ username, setUsername }}>
      {children}
    </UserDataContext.Provider>
  );
}

export default UserContext;
