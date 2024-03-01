import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./components/sidebar";
import "./App.css";

export const ThemeContext = createContext(false);
export const NavContext = createContext(false);

export default function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [navHidden, setNavHidden] = useState(false);

  return (
    <>
      <ThemeContext.Provider value={[darkTheme, setDarkTheme]}>
        <NavContext.Provider value={[navHidden, setNavHidden]}>
          <Sidebar />
          <Outlet />
        </NavContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}
