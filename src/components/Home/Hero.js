import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FiArrowRight, FiBriefcase, FiClock, FiDownload } from "react-icons/fi";
import { SiApple, SiGoogleplay } from "react-icons/si";
import Card from "../UI/Card";
import { HireButtons } from "../UI/Hire";
import { EASE, reveal } from "../UI/reveal";
import { useLocalTime } from "../../hooks/useLocalTime";
import { marqueeStack, profile, socials, stats } from "../../data/profile";
import portrait from "../../Assets/shahrob-portrait.jpg";
import "./Hero.css";

const HERO_SOCIALS = socials.filter((social) =>
  ["github", "linkedin", "x"].includes(social.id)
);

function RotatingWord({ words }) {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion) return undefined;
    const timer = setInterval(() => setIndex((i) => (i + 1) % words.length), 2600);
    return () => clearInterval(timer);
  }, [reduceMotion, words.length]);

  return (
    <span className="rotator">
      <span className="sr-only">{words.join(", ")}</span>
      <span className="rotator-window" aria-hidden="true">
        <AnimatePresence initial={false}>
          <motion.span
            key={words[index]}
            className="rotator-word"
            initial={{ y: "105%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-105%", opacity: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            {words[index]}
          </motion.span>
        </AnimatePresence>
      </span>
    </span>
  );
}

function Hero() {
  const time = useLocalTime(profile.timeZone);

  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero-backdrop" aria-hidden="true" />
      <div className="container">
        <div className="hero-bento">
          <Card className="tile tile-intro" {...reveal(0)}>
            <div className="intro-top">
              <span className="status-pill">
                <span className="status-dot" aria-hidden="true" />
                {profile.availability}
              </span>
              <ul className="intro-socials" aria-label="Social profiles">
                {HERO_SOCIALS.map(({ id, label, url, icon: Icon }) => (
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

            <div className="intro-body">
              <h1 id="hero-title" className="hero-title">
                {profile.name}
              </h1>
              <p className="hero-lead">
                {profile.role} building
                <RotatingWord words={profile.rotatingWords} />
                for startups and businesses, from architecture and APIs to
                deployment.
              </p>
            </div>

            <div className="intro-actions">
              <div className="intro-buttons">
                <Link to="/#contact" className="btn btn-primary">
                  Start a project <FiArrowRight aria-hidden="true" />
                </Link>
                <a
                  href={profile.resume}
                  className="btn btn-ghost"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiDownload aria-hidden="true" /> Download CV
                </a>
              </div>
              <div className="intro-hire">
                <span className="intro-hire-label">Hire me on</span>
                <HireButtons />
              </div>
            </div>
          </Card>

          <Card className="tile tile-photo" {...reveal(0.06)}>
            <img
              src={portrait}
              alt={`Portrait of ${profile.name}`}
              width="720"
              height="900"
            />
            <div className="photo-caption">
              <span className="photo-name">{profile.shortName}</span>
              <span className="photo-meta mono">{profile.location}</span>
            </div>
          </Card>

          <Card className="tile tile-now" {...reveal(0.12)}>
            <p className="eyebrow">
              <FiBriefcase aria-hidden="true" /> Currently
            </p>
            <p className="now-role">
              {profile.currentRole.title}
              <span> at {profile.currentRole.company}</span>
            </p>
            <p className="tile-note mono">Since {profile.currentRole.since}</p>
          </Card>

          <Card className="tile tile-stat tile-years tile--accent" {...reveal(0.16)}>
            <p className="stat-value">{stats.years.value}</p>
            <p className="stat-label">{stats.years.label}</p>
          </Card>

          <Card className="tile tile-stat tile-apps" {...reveal(0.2)}>
            <div className="stat-row">
              <p className="stat-value">{stats.apps.value}</p>
              <span className="store-icons" aria-hidden="true">
                <SiApple />
                <SiGoogleplay />
              </span>
            </div>
            <p className="stat-label">{stats.apps.label}</p>
          </Card>

          <Card className="tile tile-stack" {...reveal(0.24)}>
            <p className="eyebrow">Stack I ship with</p>
            <div className="marquee">
              <ul className="marquee-track" aria-label="Technologies">
                {[...marqueeStack, ...marqueeStack].map(({ name, icon: Icon, color }, i) => (
                  <li
                    key={`${name}-${i}`}
                    className="marquee-item"
                    aria-hidden={i >= marqueeStack.length ? "true" : undefined}
                  >
                    <Icon
                      className="brand-icon"
                      style={color ? { "--brand": color } : undefined}
                      aria-hidden="true"
                    />
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          </Card>

          <Card className="tile tile-time" {...reveal(0.28)}>
            <p className="eyebrow">
              <FiClock aria-hidden="true" /> Local time
            </p>
            <p className="time-value mono">{time || profile.utcOffset}</p>
            <p className="tile-note">
              {profile.locationShort} · {profile.utcOffset}
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Hero;
