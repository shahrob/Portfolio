import React from "react";
import { skills } from "../../data/portfolio";
import Reveal, { SectionHeader } from "./Reveal";

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionHeader
          index="04"
          eyebrow="Toolkit"
          title="The stack I reach for."
          intro="TypeScript end to end, chosen for the problem — not the hype."
        />
        <div className="skills-grid">
          {skills.map((s, i) => (
            <Reveal key={s.group} delay={i * 0.05} className="card skill-group">
              <h3>{s.group}</h3>
              <ul className="tags tags--lg">
                {s.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
