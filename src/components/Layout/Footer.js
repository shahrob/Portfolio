import React from "react";
import { Link } from "react-router-dom";
import { FiArrowUp } from "react-icons/fi";
import { profile, sections, socials } from "../../data/profile";
import { isMac, prefersReducedMotion } from "../../utils/browser";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? "auto" : "smooth" });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="logo" aria-label="Muhammad Shahrob Abbas, home">
              Sa<span>.</span>
            </Link>
            <p>
              {profile.role} building web, mobile, SaaS and AI-powered products
              from {profile.location}.
            </p>
          </div>

          <nav className="footer-nav" aria-label="Footer">
            <ul>
              {sections.map((section) => (
                <li key={section.id}>
                  <Link to={`/#${section.id}`}>{section.label}</Link>
                </li>
              ))}
              <li>
                <Link to="/projects">All projects</Link>
              </li>
              <li>
                <Link to="/resume">Resume</Link>
              </li>
            </ul>
          </nav>

          <ul className="footer-socials" aria-label="Social profiles">
            {socials.map(({ id, label, url, icon: Icon }) => (
              <li key={id}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-btn"
                  aria-label={label}
                  title={label}
                >
                  <Icon aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-bottom">
          <p>
            © {year} {profile.name}. Designed and developed by me.
          </p>
          <p className="footer-hint">
            Press <kbd>{isMac ? "⌘" : "Ctrl"}</kbd> <kbd>K</kbd> to jump anywhere
          </p>
          <button type="button" className="footer-top-btn" onClick={backToTop}>
            Back to top <FiArrowUp aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="footer-wordmark" aria-hidden="true">
        {profile.shortName}
      </div>
    </footer>
  );
}

export default Footer;
