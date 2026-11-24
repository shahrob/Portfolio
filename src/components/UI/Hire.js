import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import Card from "./Card";
import { reveal } from "./reveal";
import { hirePlatforms } from "../../data/profile";
import "./Hire.css";

// Compact brand pills linking to the freelance platforms.
export function HireButtons({ className = "" }) {
  return (
    <ul className={`hire-buttons ${className}`.trim()}>
      {hirePlatforms.map(({ id, name, url, icon: Icon, color }) => (
        <li key={id}>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="hire-pill"
            style={{ "--brand": color }}
            aria-label={`Hire me on ${name}`}
          >
            <Icon className="hire-pill-icon" aria-hidden="true" />
            {name}
            <FiArrowUpRight className="hire-pill-arrow" aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
}

// One large card per platform, used in the contact section.
export function HireCards() {
  return (
    <div className="hire-cards">
      {hirePlatforms.map(({ id, name, url, icon: Icon, color, description }, index) => (
        <Card
          key={id}
          as="a"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="tile hire-card is-link"
          style={{ "--brand": color }}
          {...reveal(index * 0.06)}
        >
          <div className="hire-card-head">
            <span className="hire-card-icon">
              <Icon aria-hidden="true" />
            </span>
            <FiArrowUpRight className="hire-card-arrow" aria-hidden="true" />
          </div>
          <h3 className="hire-card-title">Hire me on {name}</h3>
          <p className="hire-card-text">{description}</p>
          <span className="link-arrow">
            View my {name} profile <FiArrowUpRight aria-hidden="true" />
          </span>
        </Card>
      ))}
    </div>
  );
}

// Call-to-action band: hire me on a platform, or message me directly.
export function HireBand({ title, text }) {
  return (
    <motion.div className="cta-band" {...reveal()}>
      <div>
        <p className="cta-title">{title}</p>
        <p className="cta-text">{text}</p>
      </div>
      <div className="cta-actions">
        <HireButtons />
        <Link to="/#contact" className="btn btn-primary">
          Message me <FiArrowRight aria-hidden="true" />
        </Link>
      </div>
    </motion.div>
  );
}
