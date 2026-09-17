import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { site, navigation } from "../data/site";
import ThemeToggle from "./ThemeToggle";

const linkClass = ({ isActive }) =>
  [
    "relative block py-1 text-sm font-semibold transition-colors",
    "before:absolute before:inset-x-0 before:-bottom-1 before:h-0.5 before:scale-x-0 before:rounded-full before:bg-accent before:transition-transform before:duration-200",
    "hover:text-heading hover:before:scale-x-100",
    isActive ? "text-heading before:scale-x-100" : "text-muted",
  ].join(" ");

const Masthead = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const links = navigation.filter((item) => !item.hidden);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-surface/85 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="relative mx-auto flex max-w-7xl items-center gap-3 px-6 py-3 sm:px-8 lg:px-12"
      >
        <Link
          to="/"
          className="group mr-auto flex min-w-0 items-center gap-3 text-heading"
        >
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-heading font-display text-sm text-surface transition group-hover:bg-accent">
            SO
          </span>
          <span className="min-w-0">
            <span className="block text-base font-bold leading-tight tracking-tight">
              {site.title}
            </span>
            <span className="mt-0.5 hidden max-w-136 text-xs leading-snug text-muted sm:block">
              {site.subtitle}
            </span>
          </span>
        </Link>

        <ul className="mr-2 hidden items-center gap-6 md:flex">
          {links.map((item) => (
            <li key={item.to}>
              <NavLink to={item.to} className={linkClass}>
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>

        <ThemeToggle />

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="flex h-9 w-9 shrink-0 flex-col items-center justify-center gap-1 rounded-full hover:bg-subtle md:hidden"
        >
          <span className="sr-only">Toggle menu</span>
          {[0, 1, 2].map((bar) => (
            <span
              key={bar}
              className={`block h-0.5 w-5 rounded-full bg-heading transition ${
                open && bar === 1 ? "opacity-0" : ""
              } ${open && bar === 0 ? "translate-y-1.5 rotate-45" : ""} ${
                open && bar === 2 ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          ))}
        </button>

        {open && (
          <ul
            id="mobile-nav"
            className="absolute right-6 top-full mt-2 w-52 rounded-xl border border-line bg-surface p-1.5 shadow-lg shadow-black/5 motion-safe:animate-rise sm:right-8 md:hidden"
          >
            {links.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `block rounded-lg px-3 py-2 text-sm font-semibold transition hover:bg-subtle ${
                      isActive ? "bg-accent-soft text-accent" : "text-ink"
                    }`
                  }
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Masthead;
