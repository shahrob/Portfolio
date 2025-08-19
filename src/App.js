import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Services from "./components/Services/Services";
import Testimonials from "./components/Testimonials/Testimonials";
import Stats from "./components/Stats/Stats";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import ErrorBoundary from "./components/ErrorBoundary";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ErrorBoundary>
      <Helmet>
        <title>Muhammad Shahrob Abbas | Full Stack Developer</title>
        <meta name="description" content="Full Stack Developer specializing in React, Node.js, React Native, and modern web technologies. Building scalable applications and digital solutions." />
        <meta name="keywords" content="Full Stack Developer, React Developer, Node.js, React Native, JavaScript, TypeScript, Web Development, Mobile App Development" />
        <meta name="author" content="Muhammad Shahrob Abbas" />
        <meta property="og:title" content="Muhammad Shahrob Abbas | Full Stack Developer" />
        <meta property="og:description" content="Full Stack Developer specializing in React, Node.js, React Native, and modern web technologies." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Muhammad Shahrob Abbas | Full Stack Developer" />
        <meta name="twitter:description" content="Full Stack Developer specializing in React, Node.js, React Native, and modern web technologies." />
        <link rel="canonical" href="https://shahrobabbas.com" />
      </Helmet>
      
      <Router>
        <Preloader load={load} />
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project" element={<Navigate to="/projects" />} />
            <Route path="/services" element={<Services />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
