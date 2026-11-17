import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiMoon, FiSun, FiMenu, FiX } from "react-icons/fi";
import { profile } from "../../data/portfolio";

const LINKS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ theme, onToggleTheme, onHome = true }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!onHome || !("IntersectionObserver" in window)) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [onHome]);

  const href = (id) => (onHome ? `#${id}` : `/#${id}`);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="container nav-inner">
        <a href={onHome ? "#top" : "/"} className="nav-logo" aria-label="Home">
          <span className="nav-logo-mark">{profile.initials}</span>
          <span className="nav-logo-text">{profile.shortName}</span>
        </a>

        <nav className={`nav-links ${open ? "is-open" : ""}`} aria-label="Primary">
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={href(l.id)}
              className={active === l.id ? "is-active" : ""}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <Link to="/resume" className="btn btn-sm btn-primary nav-cta" onClick={() => setOpen(false)}>
            Résumé
          </Link>
        </nav>

        <div className="nav-actions">
          <button
            type="button"
            className="icon-btn"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
          <button
            type="button"
            className="icon-btn nav-toggle"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </header>
  );
}
