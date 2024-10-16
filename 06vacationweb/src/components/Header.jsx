import React from "react";
import Logo from "../assets/logo.jpg";
import { NavLink, useLocation } from "react-router-dom";

function Header() {
  const nav = useLocation();
  // console.log(nav);

  return (
    <header className="shadow-md">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex items-center">
          <a href="#" className="w-32">
            <img src={Logo} alt="" />
          </a>
          <ul className="flex gap-7 mx-auto text-lg font-medium text-gray-700">
            {/* <li>
              <NavLink
                to="/"
                exact="true"
                className={nav.pathname == "/" ? "text-blue-700" : ""}
              >
                Home
              </NavLink>
            </li> */}
            <li>
              <NavLink
                to="/"
                exact="true"
                className={({ isActive }) => [isActive ? "text-blue-700" : ""]}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => [isActive ? "text-blue-700" : ""]}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => [isActive ? "text-blue-700" : ""]}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/github"
                className={({ isActive }) => [isActive ? "text-blue-700" : ""]}
              >
                Github
              </NavLink>
            </li>
          </ul>
          <div className="flex">
            <a href="#" className="pe-8 py-2">
              Log in
            </a>
            <a
              href="#"
              className="px-8 py-2 bg-blue-700 rounded-3xl text-white hover:bg-blue-800 transition-all"
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
