import React from "react";
import { motion } from "framer-motion";
import { reveal } from "./reveal";
import "./Section.css";

// tone:    accent hue for the label pill, heading accent and glow
//          ("violet" | "pink" | "blue")
// glow:    which side the soft background glow sits on ("left" | "right")
// variant: "plain", "tint" (lightly tinted band) or "inverse" (dark band)
function Section({
  id,
  index,
  eyebrow,
  title,
  intro,
  action,
  tone = "violet",
  glow = "left",
  variant = "plain",
  className = "",
  children,
}) {
  const titleId = `${id}-title`;
  const classes = [
    "section",
    `tone-${tone}`,
    `glow-${glow}`,
    variant !== "plain" && "section--band",
    variant === "tint" && "section--tint",
    variant === "inverse" && "inverse",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section id={id} className={classes} aria-labelledby={titleId}>
      <div className="container">
        <motion.div className="section-head" {...reveal()}>
          <div className="section-head-text">
            <p className="eyebrow section-label">
              <span className="eyebrow-index">{index}</span>
              <span className="eyebrow-rule" aria-hidden="true" />
              {eyebrow}
            </p>
            <h2 id={titleId} className="section-title">
              {title}
            </h2>
            {intro && <p className="section-intro">{intro}</p>}
          </div>
          {action && <div className="section-action">{action}</div>}
        </motion.div>
        {children}
      </div>
    </section>
  );
}

export default Section;
