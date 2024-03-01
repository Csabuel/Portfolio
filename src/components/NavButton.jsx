import { useContext } from "react";
import { NavContext } from "../App";
import { MdArrowForward } from "react-icons/md";

export const NavButton = () => {
  const [navHidden, setNavHidden] = useContext(NavContext);
  return (
    <div
      className={`fixed flex z-40 top-0 h-full  bg-transparent p-2 ${
        navHidden ? "-left-64 " : "left-0 w-12 "
      } p-3 transition-all duration-300 ease-in-out`}
    >
      <div
        onClick={() => setNavHidden(!navHidden)}
        className="absolute animate-bounce  cursor-pointer right-0 top-1/2  bg-white p-2 rounded-full shadow-md"
      >
        <MdArrowForward size={24} />
      </div>
    </div>
  );
};
