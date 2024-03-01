import { useContext, useState } from "react";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { ThemeContext } from "../App";

export const ProjectFullDisplay = ({ props }) => {
  const [darkTheme] = useContext(ThemeContext);
  const [imgIndex, setImgIndex] = useState(0);

  const handleImgChangeForward = () => {
    if (imgIndex < props.img.length - 1) {
      setImgIndex(imgIndex + 1);
    } else {
      setImgIndex(0);
    }
  };

  const handleImgChangeBackward = () => {
    if (imgIndex > 0) {
      setImgIndex(imgIndex - 1);
    } else {
      setImgIndex(props.img.length - 1);
    }
  };

  return (
    <article
      key={props.id}
      className={`mt-10 mb-24 flex flex-col md:flex-row justify-center items-center ${
        props.id % 2 ? "md:flex-row-reverse" : ""
      }`}
    >
      <div
        className={`relative max-w-lg mx-6 border shadow-2xl rounded-lg overflow-hidden ${
          darkTheme ? "border-accent-color" : "border-gray-200"
        } transition-all group`}
      >
        <button
          onClick={handleImgChangeBackward}
          className="absolute z-40 left-0 top-1/2 transform -translate-y-1/2 bg-accent-color text-white p-2 rounded-full shadow-md transition-all"
        >
          <MdArrowBack />
        </button>
        <img
          className="w-full transition-all"
          src={props.img[imgIndex]}
          alt={`Project ${props.id}`}
        />
        <button
          onClick={handleImgChangeForward}
          className="absolute z-40 right-0 top-1/2 transform -translate-y-1/2 bg-accent-color text-white p-2 rounded-full shadow-md transition-all"
        >
          <MdArrowForward />
        </button>
      </div>
      <div className="max-w-lg md:max-w-96 ml-3 mt-6 md:mt-0">
        <h2
          className={`text-2xl md:text-3xl mb-3 font-bold ${
            darkTheme ? "text-light-color" : "text-gray-600"
          } transition-all`}
        >
          {props.title}
        </h2>
        <p
          className={`${
            darkTheme ? "text-light-color" : "text-gray-600"
          } transition-all`}
        >
          {props.description}
        </p>
        <div className="mt-4 flex flex-col items-center  md:flex-row justify-center md:justify-start gap-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold  hover:underline"
            href={props.gitHubLink}
          >
            gitHub 💻
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold  hover:underline"
            href={props.liveDemo}
          >
            Live Demo 🌐
          </a>
        </div>
      </div>
    </article>
  );
};
