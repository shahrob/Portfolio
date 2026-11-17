import React from "react";
import { motion } from "framer-motion";

export default function Reveal({ children, delay = 0, y = 24, className, as = "div" }) {
  const Tag = motion[as] || motion.div;
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  );
}

export function SectionHeader({ index, eyebrow, title, intro }) {
  return (
    <Reveal className="section-header">
      <p className="eyebrow">
        <span className="eyebrow-index">{index}</span> {eyebrow}
      </p>
      <h2 className="section-title">{title}</h2>
      {intro && <p className="section-intro">{intro}</p>}
    </Reveal>
  );
}
