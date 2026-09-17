import { useState } from "react";
import { FaRegMoon, FaRegSun } from "react-icons/fa6";

const ThemeToggle = () => {
  const [dark, setDark] = useState(() =>
    document.documentElement.classList.contains("dark"),
  );

  const toggle = () => {
    const next = !dark;
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // Storage can be unavailable (private mode); the toggle still works for this visit.
    }
    setDark(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-muted transition hover:bg-subtle hover:text-heading"
    >
      {dark ? <FaRegSun aria-hidden="true" /> : <FaRegMoon aria-hidden="true" />}
    </button>
  );
};

export default ThemeToggle;
