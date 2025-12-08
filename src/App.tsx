import { useState, useEffect } from "react";
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

function App() {
  type Page = "home" | "about" | "services" | "get-started" | "faq" | "search";
  useTheme().getTheme();

  const currentScrollY = ScrollHandler();

  const getInitialPage = (): Page => {
    const hash = window.location.hash.replace("#", "").split("?")[0];
    if (
      hash &&
      ["home", "about", "services", "get-started", "faq", "search"].includes(
        hash
      )
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
          <div className="header-logo no-show-mobile">
            <LogoImg preferredSize={50} borderRadius={12} borderThickness={2} />
          </div>
          <h1 className="header-title green-text">Verdant Webworks</h1>
          <ul className={"nav-links " + (menuActive ? "active" : "")}>
            {["home", "about", "services"].map((page) => (
              <li key={page}>
                <a
                  className={currentPage === page ? "active" : ""}
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
                className={currentPage === "faq" ? "active" : ""}
                href="#faq"
                onClick={() => {
                  setCurrentPage("faq");
                  setMenuActive(false);
                }}
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="#get-started"
                className="square-btn green-glow hire-btn"
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
      <main>
        {currentPage === "home" && <Home />}
        {currentPage === "about" && <About />}
        {currentPage === "services" && <Services />}
        {currentPage === "get-started" && <IntakeQuestionsForm />}
        {currentPage === "faq" && <Faq />}
        {currentPage === "search" && <SearchResults />}
      </main>
      <div
        className="scroll-position-indicator"
        style={{
          width: `${
            (currentScrollY /
              (document.body.scrollHeight - window.innerHeight)) *
            100
          }%`,
          backgroundColor: "var(--verdant-green)",
          position: "fixed",
          bottom: 0,
          left: 0,
          height: "4px",
          zIndex: 9999,
          transition: "width 0.35s ease",
        }}
      ></div>
      <Footer scrollY={currentScrollY} />
    </>
  );
}

export default App;
