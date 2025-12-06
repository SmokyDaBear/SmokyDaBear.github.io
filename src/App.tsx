import { useState } from "react";
import { hamburger } from "./icons/icons";
import { Home } from "./pages/Home";
import { Footer } from "./Components/Footer";
import { LogoImg } from "./Components/LogoImg";

function App() {
  type Page = "home" | "about" | "services" | "contact";

  const getInitialPage = (): Page => {
    const hash = window.location.hash.replace("#", "");
    if (hash && ["home", "about", "services", "contact"].includes(hash)) {
      return hash as Page;
    }
    return "home";
  };

  const [menuActive, setMenuActive] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>(getInitialPage());

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
            {["home", "about", "services", "contact"].map((page) => (
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
          </ul>
        </nav>
      </header>
      <main>
        {currentPage === "home" && <Home />}
        {currentPage === "about" && <div>About Page Content</div>}
        {currentPage === "services" && <div>Services Page Content</div>}
        {currentPage === "contact" && <div>Contact Page Content</div>}
      </main>
      <Footer />
    </>
  );
}

export default App;
