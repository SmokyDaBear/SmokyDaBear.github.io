import "./Header.css";
import { useEffect, useState } from "react";
import type { Route } from "../../lib/router";
import { paths } from "../../lib/router";
import type { Theme } from "../../lib/theme";
import { CloseIcon, MenuIcon, MoonIcon, SunIcon } from "../../lib/icons";

const navLinks: { label: string; href: string; match: Route["name"][] }[] = [
  { label: "Home", href: paths.home, match: ["home"] },
  { label: "Projects", href: paths.projects, match: ["projects", "project"] },
  { label: "About", href: paths.about, match: ["about"] },
];

export function Header({
  route,
  theme,
  toggleTheme,
}: {
  route: Route;
  theme: Theme;
  toggleTheme: () => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [route]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href={paths.home} aria-label="Verdant Webworks — home">
          <img className="brand-logo" src="/verdant-icon.svg" alt="" />
          <span className="brand-name">
            Verdant<em>Webworks</em>
          </span>
        </a>

        <nav
          id="site-nav"
          className={"site-nav" + (menuOpen ? " open" : "")}
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={
                "nav-link" + (link.match.includes(route.name) ? " active" : "")
              }
              aria-current={link.match.includes(route.name) ? "page" : undefined}
            >
              {link.label}
            </a>
          ))}
          <a
            href={paths.hire}
            className={
              "btn btn-primary nav-hire" +
              (route.name === "hire" ? " active" : "")
            }
          >
            Hire Me
          </a>
        </nav>

        <div className="header-actions">
          <button
            className="icon-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            className="icon-btn menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
    </header>
  );
}
