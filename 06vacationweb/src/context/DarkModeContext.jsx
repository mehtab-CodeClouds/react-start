import React, { createContext, useEffect, useState } from "react";

export const DarkMode = createContext();

function DarkModeContext({ children }) {
  const [isDarkTrue, setIsDarkTrue] = useState(false);

  useEffect(() => {
    document.body.className = isDarkTrue ? "dark" : "light";
  }, [isDarkTrue]);

  return (
    <>
      <DarkMode.Provider value={{ isDarkTrue, setIsDarkTrue }}>
        {children}
      </DarkMode.Provider>
    </>
  );
}

export default DarkModeContext;
