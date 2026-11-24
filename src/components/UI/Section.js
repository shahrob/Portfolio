import React from "react";
import { motion } from "framer-motion";
import { reveal } from "./reveal";
import "./Section.css";

function Section({ id, index, eyebrow, title, intro, action, className = "", children }) {
  const titleId = `${id}-title`;

  return (
    <section id={id} className={`section ${className}`.trim()} aria-labelledby={titleId}>
      <div className="container">
        <motion.div className="section-head" {...reveal()}>
          <div className="section-head-text">
            <p className="eyebrow">
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
