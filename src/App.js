import React, { Suspense, lazy, useCallback, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { MotionConfig } from "framer-motion";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import ScrollManager from "./components/Layout/ScrollManager";
import CommandPalette from "./components/Layout/CommandPalette";
import Home from "./components/Home/Home";
import ProjectsPage from "./components/Projects/ProjectsPage";
import { ThemeProvider } from "./hooks/useTheme";
import { ToastProvider } from "./hooks/useToast";
import { legacySectionRoutes } from "./data/profile";

// The resume viewer pulls in PDF.js, so load it only when someone opens it.
const ResumePage = lazy(() => import("./components/Resume/ResumePage"));

function App() {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const openPalette = useCallback(() => setPaletteOpen(true), []);
  const closePalette = useCallback(() => setPaletteOpen(false), []);

  // ⌘K / Ctrl+K toggles the command menu from anywhere.
  useEffect(() => {
    const onKeyDown = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setPaletteOpen((open) => !open);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <ErrorBoundary>
      <Helmet>
        <title>Muhammad Shahrob Abbas | Senior Full Stack Developer</title>
        <meta
          name="description"
          content="Senior Full Stack Developer (6+ years) building React Native mobile apps, Next.js web apps, Node.js/NestJS backends and AI features (LLMs, RAG, vector search)."
        />
        <meta
          name="keywords"
          content="Senior Full Stack Developer, React Native, Next.js, React, Node.js, NestJS, TypeScript, AI, LLM, RAG, SaaS, Web Development, Mobile App Development"
        />
        <meta name="author" content="Muhammad Shahrob Abbas" />
        <meta
          property="og:title"
          content="Muhammad Shahrob Abbas | Senior Full Stack Developer"
        />
        <meta
          property="og:description"
          content="Senior Full Stack Developer | AI SaaS, Web & Mobile Apps | React, React Native, Node.js & NestJS"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Muhammad Shahrob Abbas | Senior Full Stack Developer"
        />
        <meta
          name="twitter:description"
          content="Senior Full Stack Developer | AI SaaS, Web & Mobile Apps | React, React Native, Node.js & NestJS"
        />
        <link rel="canonical" href="https://shahrobabbas.com" />
      </Helmet>

      <ThemeProvider>
        <ToastProvider>
          <MotionConfig reducedMotion="user">
            <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
              <a href="#main" className="skip-link">
                Skip to content
              </a>
              <ScrollManager />
              <Navbar onOpenPalette={openPalette} />
              <main id="main" tabIndex={-1}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  {Object.keys(legacySectionRoutes).map((path) => (
                    <Route key={path} path={path} element={<Home />} />
                  ))}
                  <Route path="/projects" element={<ProjectsPage />} />
                  <Route path="/project" element={<Navigate to="/projects" replace />} />
                  <Route
                    path="/resume"
                    element={
                      <Suspense fallback={<div className="page" aria-busy="true" />}>
                        <ResumePage />
                      </Suspense>
                    }
                  />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </main>
              <Footer />
              <CommandPalette open={paletteOpen} onClose={closePalette} />
            </Router>
          </MotionConfig>
        </ToastProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
