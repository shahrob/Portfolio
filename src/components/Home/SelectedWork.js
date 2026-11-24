import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import Section from "../UI/Section";
import { ProjectCard } from "../Projects/ProjectCard";
import { projects } from "../../data/profile";
import "./SelectedWork.css";

const HIGHLIGHTS = projects.filter((project) => project.highlight);

function SelectedWork() {
  return (
    <Section
      id="work"
      index="02"
      eyebrow="Selected work"
      tone="pink"
      glow="right"
      variant="inverse"
      title={
        <>
          Things I've <em>built</em>.
        </>
      }
      intro="A few highlights from the FinTech, SaaS, marketplace, e-commerce and mobile products I've built."
      action={
        <Link to="/projects" className="btn btn-ghost">
          All {projects.length} projects <FiArrowRight aria-hidden="true" />
        </Link>
      }
    >
      <div className="work-bento">
        {HIGHLIGHTS.map((project, index) => (
          <ProjectCard
            key={project.name}
            project={project}
            variant={index === 0 ? "feature" : "compact"}
            className={`work-${index + 1}`}
            delay={index * 0.06}
          />
        ))}
      </div>
    </Section>
  );
}

export default SelectedWork;
