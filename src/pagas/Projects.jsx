import { useContext } from "react";
import { NavContext, ThemeContext } from "../App";
import { ProjectFullDisplay } from "../components/ProjectFullDisplay";
import { projects } from "../components/projects";

export const Projects = () => {
  const [darkTheme] = useContext(ThemeContext);
  const [navHidden] = useContext(NavContext);

  return (
    <section
      className={`h-contact ${
        navHidden ? "lg:ml-64" : ""
      }  pt-2 pr-2 pb-2 relative  ${
        darkTheme ? "bg-dark-bg text-light-color" : ""
      } transition-all duration-400 ease-in-out`}
    >
      <div className="grid grid-cols-1 gap-6">
        {projects.map((project, index) => (
          <ProjectFullDisplay key={index} props={project} />
        ))}
      </div>
    </section>
  );
};
