import { useContext } from "react";
import { ThemeContext } from "../App";
import { MdArrowOutward } from "react-icons/md";

export const MyProjects = ({ title, img }) => {
  const [darkTheme] = useContext(ThemeContext);
  return (
    <div>
      <div
        className={` relative w-[260px] sm:w-[420px] h-44 sm:h-64 border-2 rounded-2xl ${
          darkTheme ? " border-accent-color " : ""
        } overflow-hidden transition-all`}
      >
        <img
          className="w-full h-full object-cover"
          src={img}
          alt="Picture from the project"
        />
        <div className=" backdrop-blur px-2 sm:px-7 h-10 sm:h-16 absolute left-0 right-0 bottom-0 z-2  flex items-center justify-between  sm:font-bold text-lg sm:text-2xl">
          <h2 className="text-accent-color">{title}</h2>
          <MdArrowOutward className="text-accent-color" />
        </div>
      </div>
    </div>
  );
};
