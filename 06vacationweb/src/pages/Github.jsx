import { useState, useContext, useRef } from "react";
import { ApiDataContext } from "../context/DataContext";
import { UserDataContext } from "../context/UserContext";
import { DarkMode } from "../context/DarkModeContext";

import { toPng } from "html-to-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

function Github() {
  const DownloadEleRef = useRef(null);
  const htmlToImageConvert = () => {
    toPng(DownloadEleRef.current, { cacheBust: false })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "GitHub-Card.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const { gitData } = useContext(ApiDataContext);

  const { isDarkTrue, setIsDarkTrue } = useContext(DarkMode);

  const { setUsername } = useContext(UserDataContext);

  const [inputUsername, setinputUsername] = useState("");

  const inputHandler = (e) => {
    setinputUsername(e.target.value);
  };

  const usernameSubmitHandler = (e) => {
    e.preventDefault();
    setUsername(inputUsername);
  };

  const toggleDarkMode = () => {
    setIsDarkTrue((prev) => !prev);
  };

  return (
    <section className="py-10">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 items-center">
          <div className="relative w-full max-w-md">
            <div className="flex justify-between absolute top-3 left-0 right-0 px-5">
              <button
                onClick={htmlToImageConvert}
                className="w-10 h-10 rounded-md bg-blue-700 hover:bg-blue-800 text-white dark:bg-white dark:text-blue-800"
              >
                <FontAwesomeIcon icon={faArrowDown} />
              </button>
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  value=""
                  className="sr-only peer"
                  checked={isDarkTrue}
                  onChange={toggleDarkMode}
                />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Dark Mode
                </span>
              </label>
            </div>
            <div
              ref={DownloadEleRef}
              className="w-full max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <div>
                <img
                  className="p-5 pt-16 rounded-t-lg"
                  src={gitData.avatar_url}
                  alt="product image"
                />
              </div>
              <div className="px-5 pb-5">
                <div>
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {gitData.name}
                  </h5>
                </div>
                <div className="flex items-center mt-2.5 mb-5">
                  <div className="flex items-center space-x-1 rtl:space-x-reverse">
                    <svg
                      className="w-4 h-4 text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-gray-200 dark:text-gray-600"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                  </div>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                    5.0
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">
                    Repositories: {gitData.public_repos}
                  </span>
                  <a
                    href={gitData.html_url}
                    target="_blank"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    View on Github
                  </a>
                </div>
              </div>
            </div>
          </div>
          <form className="mb-10" onSubmit={usernameSubmitHandler}>
            <h2 className="text-5xl font-medium">Get Your Github</h2>
            <label htmlFor="github" className="text-xl font-medium mt-5 block">
              Write Your Username Here
            </label>
            <input
              type="text"
              value={inputUsername}
              onChange={inputHandler}
              name="github"
              className="border px-5 py-2 mt-5 w-full"
            />
            <button className="px-8 py-2 bg-blue-700 rounded-3xl text-white hover:bg-blue-800 transition-all mt-5">
              Get Profile
            </button>
          </form>
        </div>
        {/* <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row ">
            <img
              className=" w-96 rounded-t-lg md:rounded-none md:rounded-s-lg"
              src={data.avatar_url}
              alt=""
            />
            <div className="flex flex-col justify-between p-10 leading-normal">
              <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900">
                {data.name}
              </h5>
              <p className="mb-3 font-normal mt-4">
                <strong>Followers:</strong> {data.followers}
              </p>
              <a href="{data.url}">
                <strong>Profile URL:</strong> {data.url}
              </a>
            </div>
          </div> */}
      </div>
    </section>
  );
}

export default Github;
