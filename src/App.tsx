import React, { useState, useEffect } from "react";
import { hamburger } from "./icons/icons";
import { Home } from "./pages/Home";
import { Footer } from "./Components/Footer";
import { LogoImg } from "./Components/LogoImg";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { IntakeQuestionsForm } from "./Components/IntakeQuestionsForm";
import Faq from "./pages/Faq";
import { SearchResults } from "./pages/SearchResults";
import { ScrollHandler } from "./utils/scrollHandler";
import { useTheme } from "./utils/themeHandler";
import { HiddenIconPage } from "./icons/HiddenIconPage";
import "./styles/animations.css";

function App() {
  type Page =
    | "home"
    | "about"
    | "services"
    | "get-started"
    | "faq"
    | "search"
    | "hidden-icons-page";
  useTheme().getTheme();

  const currentScrollY = ScrollHandler();

  const getInitialPage = (): Page => {
    const hash = window.location.hash.replace("#", "").split("?")[0];
    if (
      hash &&
      [
        "home",
        "about",
        "services",
        "get-started",
        "faq",
        "search",
        "hidden-icons-page",
      ].includes(hash)
    ) {
      return hash as Page;
    }
    return "home";
  };

  const [menuActive, setMenuActive] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>(getInitialPage());

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getInitialPage());
      setMenuActive(false);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  });

  return (
    <>
      <header id="main-header">
        <nav id="navbar">
          {hamburger({
            active: menuActive,
            handleClick: () => setMenuActive(!menuActive),
          })}
          <h1 className="header-title">
            {" "}
            <div className="header-logo">
              <LogoImg
                preferredSize={44}
                borderRadius={12}
                borderThickness={2}
              />
            </div>{" "}
            Verdant Webworks
          </h1>
          <ul className={"nav-links " + (menuActive ? "active" : "")}>
            {["home", "about", "services", "faq"].map((page) => (
              <li key={page}>
                <a
                  className={currentPage === page ? "accent-underline active" : "accent-underline"}
                  href={"#" + page}
                  onClick={() => {
                    setCurrentPage(page as Page);
                    setMenuActive(false);
                  }}
                >
                  {page.charAt(0).toUpperCase() + page.slice(1)}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#get-started"
                className={"square-btn bg-shift hire-btn " + (currentPage === "get-started" ? " active" : "")}
                onClick={() => {
                  setCurrentPage("get-started");
                  setMenuActive(false);
                }}
              >
                Hire Me
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main
        className="jagged-bg"
        style={
          { "--jagged-angle": `${45 + currentScrollY * 0.02}deg` } as React.CSSProperties
        }
      >
        {currentPage === "home" && <><Home /></>}
        {currentPage === "about" && <About />}
        {currentPage === "services" && <Services />}
        {currentPage === "get-started" && <IntakeQuestionsForm />}
        {currentPage === "faq" && <Faq />}
        {currentPage === "search" && <SearchResults />}
        {currentPage === "hidden-icons-page" && <HiddenIconPage />}
      </main>
      <Footer scrollY={currentScrollY} />
    </>
  );
}

export default App;
