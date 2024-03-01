import { IoSunnyOutline } from "react-icons/io5";
import { IoMdMoon } from "react-icons/io";
import { useContext } from "react";
import { ThemeContext } from "../App";

export const ThemeButton = () => {
  const [darkTheme, setDarkTheme] = useContext(ThemeContext);

  return (
    <div
      onClick={() => setDarkTheme(!darkTheme)}
      className={`w-20 h-9 px-3 flex items-center border shadow-lg rounded-2xl ${
        darkTheme ? "justify-end border-accent-color" : ""
      } transition-all `}
    >
      <div className="w-6 h-6 flex items-center rounded-full cursor-pointer">
        {darkTheme ? (
          <IoSunnyOutline size="lg" className="text-white" />
        ) : (
          <IoMdMoon size="lg" />
        )}
      </div>
    </div>
  );
};
