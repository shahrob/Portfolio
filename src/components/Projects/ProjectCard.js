import React from "react";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiGitBranch,
  FiGithub,
  FiStar,
} from "react-icons/fi";
import { SiAppstore, SiGoogleplay } from "react-icons/si";
import Card from "../UI/Card";
import { reveal } from "../UI/reveal";
import "./ProjectCard.css";

const LINK_ICONS = {
  "Google Play": SiGoogleplay,
  "App Store": SiAppstore,
};

const LANGUAGE_COLORS = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  Java: "#b07219",
  Kotlin: "#A97BFF",
  Swift: "#F05138",
  Dart: "#00B4AB",
  HTML: "#e34c26",
  CSS: "#563d7c",
  SCSS: "#c6538c",
  Vue: "#41b883",
  "C++": "#f34b7d",
  PHP: "#4F5D95",
  Go: "#00ADD8",
};

const relativeTime =
  typeof Intl !== "undefined" && Intl.RelativeTimeFormat
    ? new Intl.RelativeTimeFormat("en", { numeric: "auto" })
    : null;

function formatUpdated(date) {
  if (!date || !relativeTime) return null;
  const days = Math.round((new Date(date) - Date.now()) / 86400000);
  if (Math.abs(days) < 30) return relativeTime.format(days, "day");
  if (Math.abs(days) < 365) return relativeTime.format(Math.round(days / 30), "month");
  return relativeTime.format(Math.round(days / 365), "year");
}

// Client / product work. `variant` is "feature" (large bento tile),
// "compact" (small bento tile) or "default" (projects page grid).
export function ProjectCard({ project, variant = "default", className = "", delay = 0 }) {
  const { name, tagline, category, role, description, pipeline } = project;
  const techStack = project.techStack || [];
  const links = project.links || [];
  const isFeature = variant === "feature";
  const chipLimit = { feature: 8, compact: 4, default: 6 }[variant] || 6;
  const shownTech = techStack.slice(0, chipLimit);
  const hiddenTech = techStack.length - shownTech.length;
  const primaryLink = links[0];

  return (
    <Card
      as="article"
      className={`project-card project-card--${variant} ${className}`.trim()}
      {...reveal(delay)}
    >
      <div className="project-top">
        <span className="eyebrow">{category}</span>
        {primaryLink && (
          <a
            className="project-arrow"
            href={primaryLink.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name}: ${primaryLink.label}`}
          >
            <FiArrowUpRight aria-hidden="true" />
          </a>
        )}
      </div>

      <div className="project-heading">
        <h3 className="project-name">{name}</h3>
        <p className="project-tagline">{tagline}</p>
      </div>

      {isFeature && pipeline && (
        <ol className="pipeline" aria-label="How the AI image search works">
          {pipeline.map((step, index) => (
            <li key={step}>
              <span className="pipeline-step">
                <span className="pipeline-index mono">{index + 1}</span>
                {step}
              </span>
              {index < pipeline.length - 1 && (
                <FiArrowRight className="pipeline-arrow" aria-hidden="true" />
              )}
            </li>
          ))}
        </ol>
      )}

      <p className="project-desc">{description}</p>

      {isFeature && project.highlights && (
        <ul className="feature-highlights">
          {project.highlights.map(({ icon: Icon, text }) => (
            <li key={text}>
              <Icon aria-hidden="true" />
              {text}
            </li>
          ))}
        </ul>
      )}

      <div className="project-bottom">
        {role && (
          <p className="project-role">
            <span>Role</span> {role}
          </p>
        )}
        <ul className="chips" aria-label="Tech stack">
          {shownTech.map((tech) => (
            <li key={tech} className="chip">
              {tech}
            </li>
          ))}
          {hiddenTech > 0 && <li className="chip chip-more">+{hiddenTech}</li>}
        </ul>
        {links.length > 0 && (
          <div className="project-links">
            {links.map((link) => {
              const Icon = LINK_ICONS[link.label] || FiArrowUpRight;
              return (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-pill"
                >
                  <Icon aria-hidden="true" />
                  {link.label}
                </a>
              );
            })}
          </div>
        )}
      </div>
    </Card>
  );
}

// Public GitHub repository, as returned by GitHubService.processRepoForPortfolio.
export function RepoCard({ repo, delay = 0 }) {
  const updated = formatUpdated(repo.updatedAt);
  const techStack = (repo.techStack || []).slice(0, 4);

  return (
    <Card as="article" className="project-card project-card--repo" {...reveal(delay)}>
      <div className="project-top">
        <span className="eyebrow">
          {repo.language && (
            <span
              className="language-dot"
              style={{ background: LANGUAGE_COLORS[repo.language] || "var(--text-subtle)" }}
              aria-hidden="true"
            />
          )}
          {repo.language || "Open source"}
        </span>
        <a
          className="project-arrow"
          href={repo.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${repo.title} on GitHub`}
        >
          <FiArrowUpRight aria-hidden="true" />
        </a>
      </div>

      <div className="project-heading">
        <h3 className="project-name">{repo.title}</h3>
      </div>

      <p className="project-desc">{repo.description}</p>

      <div className="project-bottom">
        <p className="repo-meta mono">
          <span>
            <FiStar aria-hidden="true" /> {repo.stars}
          </span>
          <span>
            <FiGitBranch aria-hidden="true" /> {repo.forks}
          </span>
          {updated && <span>Updated {updated}</span>}
        </p>
        {techStack.length > 0 && (
          <ul className="chips" aria-label="Tech stack">
            {techStack.map((tech) => (
              <li key={tech} className="chip">
                {tech}
              </li>
            ))}
          </ul>
        )}
        <div className="project-links">
          <a
            href={repo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-pill"
          >
            <FiGithub aria-hidden="true" />
            Repository
          </a>
          {repo.demoUrl && (
            <a
              href={repo.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-pill"
            >
              <FiArrowUpRight aria-hidden="true" />
              Live demo
            </a>
          )}
        </div>
      </div>
    </Card>
  );
}

export function RepoSkeleton() {
  return (
    <div className="card project-card project-card--skeleton" aria-hidden="true">
      <span className="skeleton-line" style={{ width: "30%" }} />
      <span className="skeleton-line skeleton-title" style={{ width: "60%" }} />
      <span className="skeleton-line" style={{ width: "100%" }} />
      <span className="skeleton-line" style={{ width: "85%" }} />
      <span className="skeleton-line" style={{ width: "45%", marginTop: "auto" }} />
    </div>
  );
}
