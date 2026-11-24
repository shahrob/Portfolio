import React from "react";
import { motion } from "framer-motion";
import Card from "../UI/Card";
import Section from "../UI/Section";
import { reveal } from "../UI/reveal";
import { about, experience, profile } from "../../data/profile";
import "./Experience.css";

function Experience() {
  const { education } = about;

  return (
    <Section
      id="experience"
      index="04"
      eyebrow="Experience"
      tone="blue"
      glow="left"
      title={
        <>
          Where I've <em>worked</em>.
        </>
      }
      intro="6+ years building web, mobile, SaaS and AI-powered products."
    >
      <ol className="timeline">
        {experience.map((job, index) => (
          <motion.li
            key={job.company}
            className={`timeline-item ${job.current ? "is-current" : ""}`}
            {...reveal(index * 0.05)}
          >
            <div className="timeline-meta">
              <p className="timeline-period mono">{job.period}</p>
              <p className="timeline-place">
                {job.location} · {job.type}
              </p>
            </div>
            <span
              className={`timeline-marker ${job.current ? "is-current" : ""}`}
              aria-hidden="true"
            />
            <Card className="timeline-card">
              <div className="timeline-card-head">
                <div>
                  <h3 className="timeline-title">{job.title}</h3>
                  <p className="timeline-company">{job.company}</p>
                </div>
                {job.current && <span className="badge">Current</span>}
              </div>
              <p className="timeline-summary">{job.summary}</p>
              <ul className="bullets">
                {job.achievements.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>
              <ul className="chips" aria-label="Technologies">
                {job.technologies.map((tech) => (
                  <li key={tech} className="chip">
                    {tech}
                  </li>
                ))}
              </ul>
            </Card>
          </motion.li>
        ))}

        <motion.li className="timeline-item" {...reveal(0.1)}>
          <div className="timeline-meta">
            <p className="timeline-period mono">{education.period}</p>
            <p className="timeline-place">{profile.location}</p>
          </div>
          <span className="timeline-marker" aria-hidden="true" />
          <Card className="timeline-card">
            <div className="timeline-card-head">
              <div>
                <h3 className="timeline-title">{education.degree}</h3>
                <p className="timeline-company">{education.school}</p>
              </div>
              <span className="badge badge-muted">Education</span>
            </div>
          </Card>
        </motion.li>
      </ol>
    </Section>
  );
}

export default Experience;
