import React, { useState, useRef, useEffect } from "react";
import backgroundImg from "../assets/bgimg.jpeg";
import meImg from "../assets/meImg.jpg";
import verifiedImg from "../assets/verified.svg.png";
import { LuMessagesSquare } from "react-icons/lu";
import { useContext } from "react";
import { NavContext, ThemeContext } from "../App";
import { Experience } from "../components/Experience";
import { KnowMe } from "./KnowMe";
import { MdArrowBack, MdArrowForward, MdDownload } from "react-icons/md";
import { MyProjects } from "../components/MyProjects";
import { projects } from "../components/projects";
import { useElementWidth } from "../components/MyComponent";
import CV from "../assets/FrontendCV.pdf";
import { NavLink } from "react-router-dom";

export const AboutMe = () => {
  const [darkTheme] = useContext(ThemeContext);
  const [navHidden, setNavHidden] = useContext(NavContext);
  const [scrollPosition, setScrollPosition] = useState(0);

  const ref = useRef(null);
  const width = useElementWidth(ref);
  const PROJECT_ON_SCREEN = width / 300 - 1;
  const MAX_PROJECT =
    projects.length * 300 +
    (projects.length + 1) * 10 -
    PROJECT_ON_SCREEN * 300;

  const handleScrollLeft = () => {
    const newPosition = scrollPosition - 300;
    setScrollPosition(Math.max(0, newPosition));
  };

  const handleScrollRight = () => {
    const newPosition = scrollPosition + 300;
    if (newPosition > MAX_PROJECT) {
      return;
    }
    setScrollPosition(newPosition);
  };

  return (
    <main
      className={`${
        navHidden ? "lg:ml-64" : ""
      } pt-2 pr-2 pb-2 relative overflow-hidden  ${
        darkTheme ? "bg-dark-bg text-light-color" : ""
      } transition-all duration-400 ease-in-out`}
    >
      <div className={`h-48`}>
        <img
          src={backgroundImg}
          className={`object-cover w-full h-full rounded-tr-3xl`}
          alt={backgroundImg}
        />
      </div>
      <div
        className={` w-32 h-32 lg:w-40 lg:h-40 border-2 absolute top-32 left-4 lg:top-36 lg:left-8 rounded-full shadow-xl overflow-hidden ${
          darkTheme ? "border-accent-color" : "border-white"
        } transition-all`}
      >
        <img className={`object-fit w-full h-full`} src={meImg} alt={meImg} />
      </div>
      <img
        src={verifiedImg}
        className={`object-cover absolute top-[14.6rem] left-[7rem] lg:top-[17rem] lg:left-[9.6rem]  top w-4 h-4 lg:w-6 lg:h-6 z-10`}
        alt={verifiedImg}
      />
      <section>
        <div
          className={`flex flex-col  sm:flex-row mt-20 ml-12 sm:m-16 lg:mt-3 mb-12 justify-between lg:pl-64 lg:pr-12`}
        >
          <div>
            <h2
              className={`text-2xl sm:text-4xl lg:text-5xl font-extrabold ${
                darkTheme ? "text-light-color" : ""
              } transition-all`}
            >
              Csaba Molnár
            </h2>
            <p
              className={`text sm:text-base -mt-1 lg:-ml-2  ${
                darkTheme ? "text-gray-400" : "text-gray-600"
              } transition-all `}
            >
              @csabuel {/**  this will be a link to my git*/}
            </p>
            <p
              className={` text-sm lg:text-lg font-semibold  lg:-ml-4 ${
                darkTheme ? "text-gray-400" : "text-gray-600"
              } transition-all `}
            >
              Frontend Developer based in Hungary, Budapest 📍
            </p>
          </div>
          <div
            className={`mt-4 sm:mt-6 lg:m-0 flex justify-center lg:justify-start items-center gap-8 sm:gap-4`}
          >
            <a href={CV} download>
              <div
                className={`w-20 sm:w-24 h-9 border  rounded-lg flex justify-center items-center gap-1 sm:gap-2  cursor-pointer shadow-xl
              ${
                darkTheme
                  ? "bg-bt-color  text-gray-300 border-accent-color"
                  : " border-black text-gray-900"
              } transition-all `}
              >
                <p className="text-xs sm:text-sm">CV</p>
                <MdDownload className="text-base sm:text-lg" />
              </div>
            </a>
            <NavLink to="/contectme">
              <div
                className={`w-24 sm:w-32 h-9 border border-black rounded-lg flex justify-center items-center gap-1 sm:gap-2 bg-black text-white cursor-pointer shadow-xl`}
              >
                <LuMessagesSquare className="text-base sm:text-lg" />
                <p className="text-base sm:text-lg">Message</p>
              </div>
            </NavLink>
          </div>
        </div>
        <h2 className={`text-lg ml-4 sm:ml-12 font-bold`}>
          Experience in following tech-stack:
        </h2>
        <Experience />

        <hr
          className={` transition-all ${
            darkTheme ? "bg-accent-color h-[2px] border-none" : ""
          }`}
        />
        <div className={`mx-4 sm:mx-12 my-4 sm:my-8`}>
          <h2
            className={`font-bold text-lg sm:text-xl mb-2 sm:mb-4 flex justify-center sm:justify-start`}
          >
            About Me
          </h2>

          <div
            className={`flex flex-col sm:flex-row justify-between pr-0 sm:pr-12 mb-2`}
          >
            <div className={`flex-1 space-y-2 sm:space-y-4`}>
              <p className="text-sm sm:text-base">
                As a passionate and dedicated front-end developer, I have
                recently embarked on my journey in the world of web development.
                I am excited to contribute my skills and enthusiasm to create
                engaging and user-friendly websites.
              </p>
              <p className="text-sm sm:text-base">
                While I am at the beginning of my journey, I am eager to learn
                and grow in this field. I have a solid foundation in HTML, CSS,
                and JavaScript, and I am constantly expanding my knowledge by
                exploring new technologies.
              </p>
              <p className="text-sm sm:text-base">
                Currently, I am practicing React and Tailwind CSS to create
                user-friendly, visually appealing, and responsive websites.
              </p>
            </div>
            <div>
              <h2 className="mt-4 flex justify-center sm:justify-start sm:-mt-12 mb-2 sm:mb-4 font-bold text-lg sm:text-xl">
                Get to know me
              </h2>
              <div className="flex justify-center sm:justify-start mb-12 sm:mb-2">
                <KnowMe />
              </div>
            </div>
          </div>
        </div>
        <hr
          className={` transition-all ${
            darkTheme ? "bg-accent-color h-[2px] border-none" : ""
          }`}
        />

        <div className={`mx-12 mt-8 mb-16 relative`}>
          <h2
            className={`font-bold text-xl mb-4 flex justify-center sm:justify-start`}
          >
            My projects
          </h2>
          <button
            className="absolute z-40 -left-8 sm:left-0 top-1/2  bg-white p-2 rounded-full shadow-md"
            onClick={handleScrollLeft}
          >
            <MdArrowBack />
          </button>
          <div ref={ref} className="overflow-hidden sm:mx-12">
            <div
              className="mx-10 flex gap-2 sm:gap-6"
              style={{
                width: `${projects.length * 300}px`,
                transform: `translateX(-${scrollPosition}px)`,
                transition: "transform 0.5s ease-in-out",
              }}
            >
              {projects.map((project, index) => (
                <MyProjects
                  key={index}
                  title={project.title}
                  img={project.img[0]}
                />
              ))}
            </div>
            <button
              className="absolute  z-40  -right-10 sm:right-0 top-1/2  bg-white p-2 rounded-full shadow-md"
              onClick={handleScrollRight}
            >
              <MdArrowForward />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};
