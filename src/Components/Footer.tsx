import { chevronUp, email, gitHub, linkedIn, linkIcon } from "../icons/icons";
import { useTheme } from "../utils/themeHandler";
import { ContactModal } from "./ContactModal";
import { LogoImg } from "./LogoImg";
import { useState } from "react";
import { Slider } from "./Slider";
export function Footer({ scrollY }: { scrollY?: number }) {
  const themeHandler = useTheme();
  const [modalOpen, setModalOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">(themeHandler.getTheme());
  return (
    <>
      <footer className="footer-container">
        <div className="footer-grid">
          {/* Logo & Branding Section */}
          <div className="footer-section footer-branding">
            <h3>Verdant Webworks</h3>
            <LogoImg
              preferredSize={150}
              borderRadius={24}
              borderThickness={3}
            />
            <p className="footer-tagline">
              Fresh, lively, and growth-oriented web solutions
            </p>
          </div>

          {/* Contact Section */}
          <div className="footer-section footer-contact">
            <h3>Get in Touch</h3>
            <a href="mailto:verdantwebworks@gmail.com" className="footer-link">
              {email()} Email
            </a>
            <button
              className="square-btn green-glow"
              onClick={() => setModalOpen(!modalOpen)}
            >
              {linkIcon()}
              Contact Me
            </button>
          </div>

          {/* Links Section */}
          <div className="footer-section footer-links">
            <h3>Connect</h3>
            <div className="footer-social">
              <a
                href="https://github.com/SmokyDaBear/SmokyDaBear.github.io"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                {gitHub()} GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/jes-green/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                {linkedIn()} LinkedIn
              </a>
              <a
                href="mailto:verdantwebworks@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                {email()} Email
              </a>
            </div>
          </div>
          <div className="footer-section">
            <h3>Preferences</h3>
            <div
              className={"flex-row cursor-pointer"}
              onClick={() => {
                const newTheme = theme === "dark" ? "light" : "dark";
                themeHandler.setTheme(newTheme);
                setTheme(newTheme);
              }}
            >
              {" "}
              Switch to {theme === "light" ? "Dark" : "Light"} Mode
              <Slider on={theme === "dark"} />
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="footer-copyright">
          <p>&copy; 2025 Jes Green | Verdant Webworks</p>
        </div>
        {scrollY && scrollY > 300 && (
          <div
            className="back-to-top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            {chevronUp("small")} Back to Top
          </div>
        )}
      </footer>
      {modalOpen && (
        <ContactModal closeModal={() => setModalOpen(!modalOpen)} />
      )}
    </>
  );
}
