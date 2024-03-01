import { useContext } from "react";
import { NavContext, ThemeContext } from "../App";
import { useForm, ValidationError } from "@formspree/react";

export const ContectMe = () => {
  const [darkTheme] = useContext(ThemeContext);
  const [navHidden] = useContext(NavContext);
  const [state, handleSubmit] = useForm("xzbngybo");

  if (state.succeeded) {
    return (
      <p
        className={`${
          navHidden ? "ml-64" : ""
        } pt-2 pr-2 pb-2 relative overflow-hidden  ${
          darkTheme ? "bg-dark-bg text-light-color" : ""
        } transition-all duration-400 ease-in-out`}
      >
        Hi! 👋 Thank you for your time!
      </p>
    );
  }

  return (
    <main
      className={`h-screen ${
        navHidden ? "lg:ml-64 -z-10" : ""
      } pt-2 pr-2 pb-2 relative overflow-hidden  ${
        darkTheme ? "bg-dark-bg text-light-color" : ""
      } transition-all duration-400 ease-in-out`}
    >
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          {" "}
          <h2
            className={`
              ${
                darkTheme ? "bg-dark-bg text-light-color" : ""
              } transition-all duration-400 ease-in-out mt-10 text-center text-xl md:text-2xl font-bold leading-9 tracking-tight text-gray-900 `}
          >
            I'm glad you made it this far. It only takes you 5 seconds to say
            hi! 👋
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
          {" "}
          <form onSubmit={handleSubmit} className="space-y-4">
            {" "}
            {/* Added spacing between form elements */}
            <label className="font-medium leading-6" htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <label className="font-medium leading-6">Let's talk</label>
            <div>
              <textarea
                id="message"
                name="message"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <button
              type="submit"
              className="mt-7 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              disabled={state.submitting}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};
