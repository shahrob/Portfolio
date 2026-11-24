import React, { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowLeft, FiArrowUpRight, FiSearch, FiX } from "react-icons/fi";
import { ProjectCard, RepoCard, RepoSkeleton } from "./ProjectCard";
import { reveal } from "../UI/reveal";
import { GitHubService } from "../../services/githubService";
import { profile, projectCategories, projects } from "../../data/profile";
import "./ProjectsPage.css";

const OPEN_SOURCE = "Open source";
const FILTERS = ["All", ...projectCategories, OPEN_SOURCE];

function matchesQuery(item, query) {
  if (!query) return true;
  return [item.name, item.title, item.tagline, item.description, ...(item.techStack || [])]
    .filter(Boolean)
    .some((value) => value.toLowerCase().includes(query));
}

// Skip forks of tutorials, configs and practice repos.
function isShowcaseRepo(repo) {
  const name = repo.name.toLowerCase();
  return (
    repo.description &&
    repo.description !== "A project built with modern technologies." &&
    !name.includes("test") &&
    !name.includes("practice") &&
    !name.includes("config")
  );
}

function ProjectsPage() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [repos, setRepos] = useState([]);
  const [publicRepoCount, setPublicRepoCount] = useState(null);
  const [repoStatus, setRepoStatus] = useState("loading");

  useEffect(() => {
    let cancelled = false;

    async function loadRepos() {
      const [githubProfile, repoList] = await Promise.all([
        GitHubService.fetchUserProfile(),
        GitHubService.fetchUserRepos(),
      ]);
      if (cancelled) return;

      if (githubProfile) setPublicRepoCount(githubProfile.public_repos);
      const showcase = repoList
        .map((repo) => GitHubService.processRepoForPortfolio(repo))
        .filter(isShowcaseRepo)
        .sort((a, b) => b.updatedAt - a.updatedAt)
        .slice(0, 12);
      setRepos(showcase);
      setRepoStatus(repoList.length > 0 ? "ready" : "error");
    }

    loadRepos();
    return () => {
      cancelled = true;
    };
  }, []);

  const query = search.trim().toLowerCase();

  const counts = useMemo(() => {
    const byCategory = { All: projects.length + repos.length, [OPEN_SOURCE]: repos.length };
    projectCategories.forEach((category) => {
      byCategory[category] = projects.filter((p) => p.category === category).length;
    });
    return byCategory;
  }, [repos.length]);

  const showClientWork = filter !== OPEN_SOURCE;
  const showRepos = filter === "All" || filter === OPEN_SOURCE;

  const clientWork = showClientWork
    ? projects.filter(
        (project) =>
          (filter === "All" || project.category === filter) && matchesQuery(project, query)
      )
    : [];
  const repoResults = showRepos ? repos.filter((repo) => matchesQuery(repo, query)) : [];

  // Hide the GitHub group when a search rules out every loaded repository.
  const showRepoGroup =
    showRepos && !(query && repoStatus === "ready" && repoResults.length === 0);
  const nothingFound =
    Boolean(query) &&
    clientWork.length === 0 &&
    repoResults.length === 0 &&
    !(showRepos && repoStatus === "loading");

  const resetFilters = () => {
    setFilter("All");
    setSearch("");
  };

  return (
    <div className="page projects-page">
      <Helmet>
        <title>Projects | {profile.name}</title>
      </Helmet>

      <div className="container">
        <motion.header className="page-head" {...reveal()}>
          <Link to="/#work" className="back-link">
            <FiArrowLeft aria-hidden="true" /> Back home
          </Link>
          <p className="eyebrow">Projects</p>
          <h1 className="page-title">
            Everything I've <em>built</em>.
          </h1>
          <p className="page-intro">
            FinTech, SaaS, marketplace, e-commerce and mobile products I've
            built, followed by my public GitHub repositories.
          </p>
        </motion.header>

        <motion.div className="toolbar" {...reveal(0.05)}>
          <div className="filter-chips" role="group" aria-label="Filter projects">
            {FILTERS.map((option) => (
              <button
                key={option}
                type="button"
                className={`filter-chip ${filter === option ? "is-active" : ""}`}
                aria-pressed={filter === option}
                onClick={() => setFilter(option)}
              >
                {option}
                <span className="filter-count mono">
                  {option === OPEN_SOURCE && repoStatus === "loading" ? "…" : counts[option]}
                </span>
              </button>
            ))}
          </div>

          <label className="search-field">
            <FiSearch aria-hidden="true" />
            <span className="sr-only">Search projects</span>
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search by name or tech…"
            />
            {search && (
              <button
                type="button"
                className="search-clear"
                onClick={() => setSearch("")}
                aria-label="Clear search"
              >
                <FiX aria-hidden="true" />
              </button>
            )}
          </label>
        </motion.div>

        {nothingFound && (
          <div className="empty-state">
            <p>No projects match “{search.trim()}”.</p>
            <button type="button" className="btn btn-ghost btn-sm" onClick={resetFilters}>
              Clear filters
            </button>
          </div>
        )}

        {clientWork.length > 0 && (
          <section className="project-group" aria-labelledby="client-work-title">
            <h2 id="client-work-title" className="group-title">
              Client & product work <span className="mono">{clientWork.length}</span>
            </h2>
            <div className="project-grid">
              {clientWork.map((project, index) => (
                <ProjectCard
                  key={project.name}
                  project={project}
                  delay={Math.min(index, 5) * 0.04}
                />
              ))}
            </div>
          </section>
        )}

        {showRepoGroup && (
          <section className="project-group" aria-labelledby="open-source-title">
            <div className="group-head">
              <h2 id="open-source-title" className="group-title">
                Open source on GitHub{" "}
                {repoStatus === "ready" && <span className="mono">{repoResults.length}</span>}
              </h2>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="link-arrow"
              >
                {publicRepoCount ? `All ${publicRepoCount} repositories` : "View GitHub profile"}{" "}
                <FiArrowUpRight aria-hidden="true" />
              </a>
            </div>

            {repoStatus === "loading" && (
              <div className="project-grid" aria-busy="true">
                <RepoSkeleton />
                <RepoSkeleton />
                <RepoSkeleton />
              </div>
            )}

            {repoStatus === "error" && (
              <p className="group-note">
                GitHub repositories couldn't be loaded right now. You can browse them
                on{" "}
                <a href={profile.github} target="_blank" rel="noopener noreferrer">
                  my GitHub profile
                </a>
                .
              </p>
            )}

            {repoStatus === "ready" && repoResults.length === 0 && (
              <p className="group-note">No public repositories to show here yet.</p>
            )}

            {repoStatus === "ready" && repoResults.length > 0 && (
              <div className="project-grid">
                {repoResults.map((repo, index) => (
                  <RepoCard key={repo.id} repo={repo} delay={Math.min(index, 5) * 0.04} />
                ))}
              </div>
            )}
          </section>
        )}
      </div>
    </div>
  );
}

export default ProjectsPage;
