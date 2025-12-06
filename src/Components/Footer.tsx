import { email, gitHub, linkedIn, linkIcon } from "../icons/icons";
import { ContactModal } from "./ContactModal";
import { LogoImg } from "./LogoImg";
import { useState } from "react";
export function Footer() {
  const [modalOpen, setModalOpen] = useState(false);
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
        </div>

        {/* Copyright Bar */}
        <div className="footer-copyright">
          <p>&copy; 2025 Jes Green | Verdant Webworks</p>
        </div>
      </footer>
      {modalOpen && (
        <ContactModal closeModal={() => setModalOpen(!modalOpen)} />
      )}
    </>
  );
}
