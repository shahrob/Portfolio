import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { projects, profile } from "../../data/portfolio";
import { SectionHeader } from "./Reveal";

const FILTERS = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

function Cover({ project }) {
  const [a, b] = project.accent;
  return (
    <div className="project-cover" style={{ "--c1": a, "--c2": b }} aria-hidden="true">
      <div className="project-window">
        <div className="project-window-bar">
          <span /> <span /> <span />
        </div>
        <div className="project-window-body">
          <span className="project-window-title">{project.title}</span>
          <span className="project-window-lines">
            <i /> <i /> <i />
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const list = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHeader
          index="03"
          eyebrow="Selected work"
          title="Products I've designed, built and shipped."
        />
        <div className="filters" role="tablist" aria-label="Filter projects">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              role="tab"
              aria-selected={filter === f}
              className={`chip ${filter === f ? "is-active" : ""}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div layout className="projects-grid">
          <AnimatePresence>
            {list.map((p) => (
              <motion.article
                layout
                key={p.title}
                className={`card project ${p.featured && filter === "All" ? "project--featured" : ""}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.35 }}
              >
                <Cover project={p} />
                <div className="project-body">
                  <p className="project-meta">
                    {p.category} · {p.tagline}
                  </p>
                  <h3>{p.title}</h3>
                  <p className="project-desc">{p.description}</p>
                  <ul className="tags">
                    {p.stack.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                  <div className="project-links">
                    {p.links.live && (
                      <a href={p.links.live} target="_blank" rel="noreferrer">
                        Live <FiArrowUpRight />
                      </a>
                    )}
                    {p.links.code && (
                      <a href={p.links.code} target="_blank" rel="noreferrer">
                        <FiGithub /> Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        <p className="projects-more">
          More experiments and open source on{" "}
          <a href={profile.socials.github} target="_blank" rel="noreferrer">
            GitHub <FiArrowUpRight />
          </a>
        </p>
      </div>
    </section>
  );
}
