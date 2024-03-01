import React from "react";
import htmlLogo from "../assets/html-5.png";
import cssLogo from "../assets/css-3.png";
import jsLogo from "../assets/js.png";
import reactLogo from "../assets/react.png";
import twLogo from "../assets/pngwing.com.png";
import reduxLogo from "../assets/redux.svg";

export const Experience = () => {
  return (
    <div className="ml-12 my-4 flex flex-row gap-5 ">
      <div className="w-8 h-8 relative group">
        <img src={htmlLogo} alt="Html logo" />
        <div className="absolute -bottom-8  bg-black text-white text-xs p-1 rounded shadow-lg opacity-0 transition-opacity duration-300  group-hover:opacity-100">
          HTML
        </div>
      </div>
      <div className="w-8 h-8 relative group">
        <img src={cssLogo} alt="Css logo" />
        <div className="absolute -bottom-8  bg-black text-white text-xs p-1 rounded shadow-lg opacity-0 transition-opacity duration-300  group-hover:opacity-100">
          CSS
        </div>
      </div>
      <div className="w-8 h-8 relative group">
        <img src={jsLogo} alt="JS logo" />
        <div className="absolute -bottom-8  bg-black text-white text-xs p-1 rounded shadow-lg opacity-0 transition-opacity duration-300  group-hover:opacity-100">
          JavaScript
        </div>
      </div>
      <div className="w-8 h-8 relative group">
        <img src={reactLogo} alt="react logo" />
        <div className="absolute -bottom-8  bg-black text-white text-xs p-1 rounded shadow-lg opacity-0 transition-opacity duration-300  group-hover:opacity-100">
          React
        </div>
      </div>
      <div className="w-8 h-8 relative group">
        <img src={reduxLogo} alt="redux logo" />
        <div className="absolute -bottom-8  bg-black text-white text-xs p-1 rounded shadow-lg opacity-0 transition-opacity duration-300  group-hover:opacity-100">
          Redux
        </div>
      </div>
      <div className="w-8 h-8 mt-2 relative group">
        <img src={twLogo} alt="Tailwind logo" />
        <div className="absolute -bottom-8  bg-black text-white text-xs p-1 rounded shadow-lg opacity-0 transition-opacity duration-300  group-hover:opacity-100">
          Tailwind CSS
        </div>
      </div>
    </div>
  );
};
