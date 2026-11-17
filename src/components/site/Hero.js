import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiDownload, FiMapPin } from "react-icons/fi";
import { profile, metrics } from "../../data/portfolio";
import photo from "../../Assets/profile.jpg";
import resume from "../../Assets/Shahrob_Resume.pdf";
import Socials from "./Socials";

const fade = (delay) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-grid-bg" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-copy">
          {profile.available && (
            <motion.p className="status-pill" {...fade(0.05)}>
              <span className="status-dot" /> {profile.availability}
            </motion.p>
          )}
          <motion.p className="hero-kicker" {...fade(0.1)}>
            Hi, I'm {profile.name} —
          </motion.p>
          <motion.h1 className="hero-title" {...fade(0.18)}>
            <span className="gradient-text">{profile.role}</span>
            <br />
            building products that scale.
          </motion.h1>
          <motion.p className="hero-lede" {...fade(0.26)}>
            {profile.summary}
          </motion.p>
          <motion.div className="hero-ctas" {...fade(0.34)}>
            <a href="#projects" className="btn btn-primary">
              View my work <FiArrowRight />
            </a>
            <a href={resume} className="btn btn-ghost" target="_blank" rel="noreferrer">
              <FiDownload /> Download CV
            </a>
          </motion.div>
          <motion.div className="hero-meta" {...fade(0.42)}>
            <Socials />
            <span className="hero-location">
              <FiMapPin /> {profile.location}
            </span>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="portrait">
            <img src={photo} alt={profile.name} width="720" height="900" />
          </div>
          <motion.div
            className="code-card"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <div className="code-card-bar">
              <span /> <span /> <span />
              <em>engineer.ts</em>
            </div>
            <pre>
              <code>
                <i className="tk-k">const</i> <i className="tk-v">shahrob</i> = {"{"}
                {"\n"}  stack: [<i className="tk-s">'React'</i>, <i className="tk-s">'Node'</i>, <i className="tk-s">'NestJS'</i>],
                {"\n"}  ships: <i className="tk-s">'web · mobile · api'</i>,
                {"\n"}  focus: <i className="tk-s">'scale & DX'</i>,
                {"\n"}{"}"};
              </code>
            </pre>
          </motion.div>
          <motion.div
            className="exp-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
          >
            <strong>5+</strong>
            <span>
              years in
              <br />
              production
            </span>
          </motion.div>
        </motion.div>
      </div>

      <div className="container">
        <motion.ul className="metrics" {...fade(0.5)}>
          {metrics.map((m) => (
            <li key={m.label}>
              <strong>{m.value}</strong>
              <span>{m.label}</span>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
