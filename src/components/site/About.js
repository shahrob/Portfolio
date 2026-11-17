import React from "react";
import { about, services } from "../../data/portfolio";
import Reveal, { SectionHeader } from "./Reveal";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <SectionHeader index="01" eyebrow="About" title="Engineer who owns the whole system." />
        <div className="about-grid">
          <Reveal className="about-copy">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 20)}>{p}</p>
            ))}
            <div className="services">
              {services.map((s) => (
                <div key={s.title} className="service">
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <div className="principles">
            {about.principles.map((pr, i) => (
              <Reveal key={pr.title} delay={i * 0.08} className="card principle">
                <span className="principle-num">0{i + 1}</span>
                <h3>{pr.title}</h3>
                <p>{pr.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
