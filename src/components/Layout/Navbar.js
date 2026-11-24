import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUpRight, FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { legacySectionRoutes, sections } from "../../data/profile";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import { useTheme } from "../../hooks/useTheme";
import { shortcutLabel } from "../../utils/browser";
import { EASE } from "../UI/reveal";
import "./Navbar.css";

const NAV_ITEMS = sections.filter((section) => section.id !== "contact");
const SPY_IDS = sections.map((section) => section.id);

function Navbar({ onOpenPalette }) {
  const location = useLocation();
  const { pathname } = location;
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const onHome = pathname === "/" || Boolean(legacySectionRoutes[pathname]);
  const spied = useScrollSpy(SPY_IDS, onHome);

  let active = onHome ? spied : null;
  if (pathname === "/projects") active = "work";
  if (pathname === "/resume") active = "resume";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu after navigating.
  useEffect(() => {
    setMenuOpen(false);
  }, [location.key]);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const links = [
    ...NAV_ITEMS.map((item) => ({ ...item, to: `/#${item.id}` })),
    { id: "resume", label: "Resume", to: "/resume" },
  ];

  const nextTheme = theme === "dark" ? "light" : "dark";

  return (
    <header
      className={`nav ${scrolled ? "is-scrolled" : ""} ${menuOpen ? "is-open" : ""}`}
    >
      <nav className="nav-bar" aria-label="Main">
        <Link to="/" className="logo" aria-label="Muhammad Shahrob Abbas, home">
          Sa<span>.</span>
        </Link>

        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.id}>
              <Link
                to={link.to}
                className={`nav-link ${active === link.id ? "is-active" : ""}`}
                aria-current={active === link.id ? "true" : undefined}
              >
                {active === link.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="nav-pill"
                    transition={{ duration: 0.35, ease: EASE }}
                  />
                )}
                <span className="nav-link-label">{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button
            type="button"
            className="icon-btn kbd-btn"
            onClick={onOpenPalette}
            aria-label="Open command menu"
            aria-keyshortcuts="Meta+K Control+K"
          >
            {shortcutLabel}
          </button>
          <button
            type="button"
            className="icon-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${nextTheme} theme`}
            title={`Switch to ${nextTheme} theme`}
          >
            {theme === "dark" ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
          </button>
          <Link to="/#contact" className="btn btn-primary btn-sm nav-cta">
            Let's talk
          </Link>
          <button
            type="button"
            className="icon-btn nav-menu-btn"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            className="nav-sheet"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: EASE }}
          >
            <ul>
              {[...links, { id: "contact", label: "Contact", to: "/#contact" }].map(
                (link) => (
                  <li key={link.id}>
                    <Link
                      to={link.to}
                      className={active === link.id ? "is-active" : ""}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                      <FiArrowUpRight aria-hidden="true" />
                    </Link>
                  </li>
                )
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
