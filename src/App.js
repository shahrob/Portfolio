import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/site/Navbar";
import Hero from "./components/site/Hero";
import About from "./components/site/About";
import Experience from "./components/site/Experience";
import Projects from "./components/site/Projects";
import Skills from "./components/site/Skills";
import Contact from "./components/site/Contact";
import Footer from "./components/site/Footer";
import Resume from "./components/site/Resume";
import { profile } from "./data/portfolio";
import "./styles.css";

function getInitialTheme() {
  try {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
  } catch (_) {
    /* storage unavailable */
  }
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}

function Layout({ theme, toggleTheme }) {
  const { pathname } = useLocation();
  return (
    <>
      <a href="#about" className="skip-link">
        Skip to content
      </a>
      <Navbar theme={theme} onToggleTheme={toggleTheme} onHome={pathname === "/"} />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch (_) {
      /* ignore */
    }
  }, [theme]);

  const title = `${profile.name} — ${profile.role}`;
  const description = `${profile.role} with 5+ years building scalable web, mobile and backend products with React, React Native, Node.js and NestJS.`;

  return (
    <ErrorBoundary>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="author" content={profile.name} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="theme-color" content={theme === "dark" ? "#0b0d12" : "#f7f7f5"} />
      </Helmet>
      <Router>
        <Layout theme={theme} toggleTheme={() => setTheme((t) => (t === "dark" ? "light" : "dark"))} />
      </Router>
    </ErrorBoundary>
  );
}

export default App;
