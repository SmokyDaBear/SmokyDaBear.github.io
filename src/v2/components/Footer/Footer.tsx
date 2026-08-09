import "./Footer.css";
import { useEffect, useState } from "react";
import { paths } from "../../lib/router";
import type { Theme } from "../../lib/theme";
import {
  ArrowUpRight,
  ChevronUp,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from "../../lib/icons";
import { contactEmail, githubUrl, linkedInUrl, siteName, tagline } from "../../data/site";
import { Modal } from "../Modal/Modal";
import { ContactForm } from "../ContactForm/ContactForm";

export function Footer({
  theme,
  toggleTheme,
}: {
  theme: Theme;
  toggleTheme: () => void;
}) {
  const [contactOpen, setContactOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-col footer-brand">
            <a className="footer-logo-row" href={paths.home}>
              <img
                className="footer-logo"
                src="/verdant-icon.svg"
                alt=""
                width={44}
                height={44}
              />
              <span className="footer-name">{siteName}</span>
            </a>
            <p className="footer-tagline">{tagline}</p>
          </div>

          <nav className="footer-col" aria-label="Footer navigation">
            <h4>Explore</h4>
            <a className="footer-link" href={paths.home}>
              Home
            </a>
            <a className="footer-link" href={paths.projects}>
              Projects
            </a>
            <a className="footer-link" href={paths.about}>
              About
            </a>
            <a className="footer-link" href={paths.hire}>
              Hire Me
            </a>
          </nav>

          <div className="footer-col">
            <h4>Get in Touch</h4>
            <a className="footer-link" href={`mailto:${contactEmail}`}>
              <MailIcon size={16} /> Email
            </a>
            <button
              className="btn btn-ghost footer-contact-btn"
              onClick={() => setContactOpen(true)}
            >
              <ArrowUpRight size={16} />
              Contact Me
            </button>
          </div>

          <div className="footer-col">
            <h4>Connect</h4>
            <a
              className="footer-link"
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon size={16} /> GitHub
            </a>
            <a
              className="footer-link"
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon size={16} /> LinkedIn
            </a>
            <h4 className="footer-pref-heading">Preferences</h4>
            <button
              className="footer-theme-row"
              role="switch"
              aria-checked={theme === "dark"}
              onClick={toggleTheme}
            >
              <span>Dark mode</span>
              <span className={"switch" + (theme === "dark" ? " on" : "")}>
                <span className="switch-knob" />
              </span>
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container footer-bottom-inner">
            <p>
              &copy; {new Date().getFullYear()} Jes Green | {siteName}
            </p>
            {showTop && (
              <button
                className="back-to-top"
                onClick={() =>
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }
              >
                <ChevronUp size={16} /> Back to top
              </button>
            )}
          </div>
        </div>
      </footer>

      {contactOpen && (
        <Modal onClose={() => setContactOpen(false)}>
          <ContactForm />
        </Modal>
      )}
    </>
  );
}
