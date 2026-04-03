import { useEffect, useState } from "react";
import logo from "../assets/react.svg";

const THEME_KEY = "selectedTheme";
const validThemes = ["light", "medium", "dark", "gOne", "gTwo", "gThree"];

export default function Header() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem(THEME_KEY);
    return validThemes.includes(savedTheme) ? savedTheme : "gOne";
  });

  useEffect(() => {
    document.documentElement.removeAttribute("class");
    document.documentElement.classList.add(theme);
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  return (
    <>
      <header>
        <div className="logo">
          <img src={logo} alt="app logo" />
          <span>TaskApp</span>
        </div>
        <div className="themeSelector">
          <span
            className={theme === "light" ? "light activeTheme" : "light"}
            onClick={() => setTheme("light")}
          ></span>
          <span
            className={theme === "medium" ? "medium activeTheme" : "medium"}
            onClick={() => setTheme("medium")}
          ></span>
          <span
            className={theme === "dark" ? "dark activeTheme" : "dark"}
            onClick={() => setTheme("dark")}
          ></span>
          <span
            className={theme === "gOne" ? "gOne activeTheme" : "gOne"}
            onClick={() => setTheme("gOne")}
          ></span>
          <span
            className={theme === "gTwo" ? "gTwo activeTheme" : "gTwo"}
            onClick={() => setTheme("gTwo")}
          ></span>
          <span
            className={theme === "gThree" ? "gThree activeTheme" : "gThree"}
            onClick={() => setTheme("gThree")}
          ></span>
        </div>
      </header>
    </>
  );
}
