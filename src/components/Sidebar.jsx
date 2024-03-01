import { NavLink } from "react-router-dom";
import { RiHome6Line } from "react-icons/ri";
import { LuFiles } from "react-icons/lu";
import { GoPeople } from "react-icons/go";
import { useContext } from "react";
import { NavContext, ThemeContext } from "../App";
import { ThemeButton } from "./ThemeButton";
import { NavButton } from "./NavButton";

export const Sidebar = () => {
  const [darkTheme] = useContext(ThemeContext);
  const [navHidden, setNavHidden] = useContext(NavContext);

  return (
    <>
      <NavButton />
      <nav
        className={`fixed  z-50 flex top-0 h-full  overflow-hidden ${
          navHidden ? "w-64 left-0 " : "-left-64"
        } flex-col justify-between gap-4 p-8 shadow-2xl ${
          darkTheme
            ? " bg-dark-bg text-light-color border-r-2 border-r-accent-color"
            : "bg-white"
        } transition-all duration-300 ease-in-out`}
      >
        <div className="flex flex-col gap-12">
          <div className="flex gap-2 -m-3">
            <div
              onClick={() => setNavHidden(!navHidden)}
              className="bg-red-500 w-3 h-3 rounded-full"
            ></div>
            <div className="bg-yellow-500 w-3 h-3 rounded-full"></div>
            <div className="bg-green-500 w-3 h-3 rounded-full"></div>
          </div>
          <ThemeButton />
        </div>

        <ul className="flex flex-col gap-3">
          <li>
            <NavLink
              to="portfolio"
              className={({ isActive }) =>
                `flex items-center gap-2 w-full text-xl 
            ${isActive ? "border-b-2 font-bold" : ""}
            ${darkTheme ? "border-accent-color" : "border-black"}
             transition-all 
            `
              }
            >
              <RiHome6Line />
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink
              to="projects"
              className={({ isActive }) =>
                `flex items-center gap-2 w-full text-xl
            ${isActive ? "border-b-2 font-bold" : ""}
            ${darkTheme ? "border-accent-color" : "border-black"}
               transition-all 
              `
              }
            >
              <LuFiles /> Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="contectme"
              className={({
                isActive,
              }) => `flex items-center gap-2 w-full text-xl
             ${isActive ? "border-b-2 font-bold" : ""}
              ${darkTheme ? "border-accent-color" : "border-black"}
               transition-all 
              `}
            >
              <GoPeople /> Contect Me
            </NavLink>
          </li>
        </ul>
        <div className="opacity-0 hover:opacity-100 transition-opacity">
          I love hamburgers
        </div>
      </nav>
    </>
  );
};
