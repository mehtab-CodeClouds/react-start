import React, { createContext, useState, useEffect, useContext } from "react";
import { UserDataContext } from "../context/UserContext";
import noUserImg from "../assets/no-user-img.jpg";

export const ApiDataContext = createContext();

const DataContext = ({ children }) => {
  const [gitData, setGitData] = useState({});

  const { username } = useContext(UserDataContext);

  const getGitData = async function () {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);

      if (!response.ok) {
        const data = {
          avatar_url: noUserImg,
          name: "User not found",
          html_url: null,
          public_repos: "null",
        };

        setGitData(data);
        throw new Error("Network response was not ok");
      } else {
        const data = await response.json();
        setGitData(data);
      }
    } catch (error) {
      console.log("An error occurred:", error.message);

      const data = {
        avatar_url: noUserImg,
        name: "User not found",
        html_url: null,
        public_repos: "null",
      };
    }
  };

  useEffect(() => {
    getGitData();
  }, [username]);

  return (
    <>
      <ApiDataContext.Provider value={{ gitData }}>
        {children}
      </ApiDataContext.Provider>
    </>
  );
};

export default DataContext;
