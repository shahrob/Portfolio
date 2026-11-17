import React from "react";
import { experience } from "../../data/portfolio";
import Reveal, { SectionHeader } from "./Reveal";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionHeader
          index="02"
          eyebrow="Experience"
          title="From Android intern to leading full stack teams."
          intro="Five years of steady growth — each role widening the scope from screens, to services, to systems and people."
        />
        <ol className="timeline">
          {experience.map((job, i) => (
            <Reveal as="li" key={`${job.role}-${job.period}`} delay={i * 0.04} className="timeline-item">
              <div className="timeline-when">
                <span className="timeline-period">{job.period}</span>
                <span className="timeline-type">{job.type}</span>
              </div>
              <div className={`card timeline-card ${i === 0 ? "is-current" : ""}`}>
                <header>
                  <h3>{job.role}</h3>
                  <p className="timeline-company">
                    {job.company} <span>· {job.location}</span>
                  </p>
                </header>
                <p className="timeline-summary">{job.summary}</p>
                <ul className="timeline-highlights">
                  {job.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
                <ul className="tags">
                  {job.stack.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
