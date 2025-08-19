import React, { useState, useEffect } from "react";
import { Container, Row, Col, Spinner, Alert, Badge, Form, InputGroup } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import AnimatedSection from "../AnimatedSection";
import { GitHubService } from "../../services/githubService";
import { 
  FaGithub, 
  FaSearch, 
  FaStar, 
  FaCodeBranch,
  FaCalendarAlt,
  FaExternalLinkAlt
} from "react-icons/fa";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [githubProfile, setGithubProfile] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTech, setSelectedTech] = useState('All');
  const [sortBy, setSortBy] = useState('updated');

  // Your existing projects as fallbacks
  const fallbackProjects = [
    {
      imgPath: chatify,
      title: "SoulCalm - Meditation App",
      description: "A comprehensive meditation and mindfulness app built with React Native. Features guided meditations, progress tracking, customizable ambient sounds, and cross-platform synchronization.",
      ghLink: "https://github.com/shahrob/soulcalm",
      demoLink: "https://play.google.com/store/apps/details?id=com.soulcalm",
      techStack: ["React Native", "Node.js", "MongoDB", "Firebase"],
      stars: 0,
      forks: 0,
      isGitHubProject: false,
      isBlog: false
    },
    {
      imgPath: bitsOfCode,
      title: "Dynamite Digital - Agency Website",
      description: "A modern, responsive web application for a digital marketing agency. Built with React.js and styled with Tailwind CSS.",
      ghLink: "https://github.com/shahrob/dynamite-digital",
      demoLink: "https://dynamitedigital.com",
      techStack: ["React", "TailwindCSS", "Node.js"],
      stars: 0,
      forks: 0,
      isGitHubProject: false,
      isBlog: false
    },
    {
      imgPath: editor,
      title: "EAnimalHub - Pet Care Platform",
      description: "A comprehensive pet care platform built with MERN stack. Features include pet profile management, veterinarian appointments, and health tracking.",
      ghLink: "https://github.com/shahrob/eanimalhub",
      demoLink: "https://eanimalhub.com",
      techStack: ["React", "Node.js", "MongoDB", "Express"],
      stars: 0,
      forks: 0,
      isGitHubProject: false,
      isBlog: false
    },
    {
      imgPath: leaf,
      title: "Evom - E-commerce Platform",
      description: "A full-stack e-commerce solution built with Node.js, Express, and React. Features include product catalog and secure payment processing.",
      ghLink: "https://github.com/shahrob/evom",
      demoLink: "https://evom-store.com",
      techStack: ["React", "Node.js", "MongoDB", "Stripe"],
      stars: 0,
      forks: 0,
      isGitHubProject: false,
      isBlog: false
    },
    {
      imgPath: suicide,
      title: "Vision - Analytics Dashboard",
      description: "A comprehensive business analytics dashboard built with React and D3.js. Features real-time data visualization and custom report generation.",
      ghLink: "https://github.com/shahrob/vision-analytics",
      demoLink: "https://vision-analytics.com",
      techStack: ["React", "D3.js", "Node.js", "PostgreSQL"],
      stars: 0,
      forks: 0,
      isGitHubProject: false,
      isBlog: false
    },
    {
      imgPath: emotion,
      title: "WeFix - Service Management App",
      description: "A service management application for repair and maintenance services. Built with React Native and Node.js.",
      ghLink: "https://github.com/shahrob/wefix",
      demoLink: "https://wefix-app.com",
      techStack: ["React Native", "Node.js", "MongoDB", "Socket.io"],
      stars: 0,
      forks: 0,
      isGitHubProject: false,
      isBlog: false
    }
  ];

  useEffect(() => {
    fetchGitHubData();
  }, []);

  useEffect(() => {
    filterAndSortProjects();
  }, [projects, searchTerm, selectedCategory, selectedTech, sortBy]);

  const fetchGitHubData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Fetch profile and repositories
      const [profile, repos] = await Promise.all([
        GitHubService.fetchUserProfile(),
        GitHubService.fetchUserRepos()
      ]);

      if (profile) {
        setGithubProfile(profile);
      }

      if (repos && repos.length > 0) {
        // Process repos for portfolio display
        const processedProjects = repos
          .map(repo => GitHubService.processRepoForPortfolio(repo))
          .filter(project => {
            // Filter out unimportant repos
            return project.description && 
                   project.description !== 'A project built with modern technologies.' &&
                   !project.name.toLowerCase().includes('test') &&
                   !project.name.toLowerCase().includes('practice') &&
                   !project.name.toLowerCase().includes('config');
          })
          .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
          .slice(0, 12);

        // Combine GitHub projects with fallback projects
        const combinedProjects = [...processedProjects, ...fallbackProjects];
        setProjects(combinedProjects);
      } else {
        setProjects(fallbackProjects);
      }
    } catch (err) {
      console.error('GitHub fetch error:', err);
      setProjects(fallbackProjects);
      setError('Using local project data. GitHub integration temporarily unavailable.');
    } finally {
      setLoading(false);
    }
  };

  const filterAndSortProjects = () => {
    let filtered = [...projects];

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.techStack?.some(tech => 
          tech.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    // Category filter
    if (selectedCategory !== 'All') {
      const categories = GitHubService.categorizeProjects(projects);
      filtered = categories[selectedCategory] || [];
    }

    // Technology filter
    if (selectedTech !== 'All') {
      filtered = filtered.filter(project =>
        project.techStack?.includes(selectedTech)
      );
    }

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'stars':
          return (b.stars || 0) - (a.stars || 0);
        case 'forks':
          return (b.forks || 0) - (a.forks || 0);
        case 'created':
          return new Date(b.createdAt || 0) - new Date(a.createdAt || 0);
        case 'name':
          return a.title.localeCompare(b.title);
        default:
          return new Date(b.updatedAt || 0) - new Date(a.updatedAt || 0);
      }
    });

    setFilteredProjects(filtered);
  };

  const getAllTechnologies = () => {
    const allTech = new Set();
    projects.forEach(project => {
      project.techStack?.forEach(tech => allTech.add(tech));
    });
    return Array.from(allTech).sort();
  };

  const getCategories = () => {
    const categories = GitHubService.categorizeProjects(projects);
    return ['All', ...Object.keys(categories)];
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  if (loading) {
    return (
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <div className="text-center" style={{ paddingTop: "200px" }}>
            <Spinner animation="border" variant="light" size="lg" />
            <h3 className="mt-3" style={{ color: "white" }}>
              Loading Projects...
            </h3>
            <p style={{ color: "#b4b4b4" }}>
              Fetching latest data from GitHub
            </p>
          </div>
        </Container>
      </Container>
    );
  }

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <AnimatedSection>
          <div className="text-center mb-5">
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="project-heading">
                My Recent <strong className="purple">Works</strong>
              </h1>
              <p style={{ color: "white", fontSize: "1.1em" }}>
                Here are some projects I've worked on recently.
              </p>
              
              {error && (
                <Alert variant="warning" className="mt-3 mx-auto" style={{ maxWidth: "600px" }}>
                  {error}
                </Alert>
              )}
              
              {githubProfile && (
                <div className="github-stats mt-4">
                  <motion.div 
                    className="d-flex justify-content-center gap-4 flex-wrap"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    <Badge bg="primary" className="stat-badge">
                      <FaGithub className="me-2" />
                      {githubProfile.public_repos} Repositories
                    </Badge>
                    <Badge bg="warning" className="stat-badge">
                      <FaStar className="me-2" />
                      {projects.reduce((sum, p) => sum + (p.stars || 0), 0)} Total Stars
                    </Badge>
                    <Badge bg="success" className="stat-badge">
                      <FaCodeBranch className="me-2" />
                      {projects.reduce((sum, p) => sum + (p.forks || 0), 0)} Total Forks
                    </Badge>
                    <Badge bg="info" className="stat-badge">
                      <FaCalendarAlt className="me-2" />
                      Since {new Date(githubProfile.created_at).getFullYear()}
                    </Badge>
                  </motion.div>
                </div>
              )}
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Enhanced Filters */}
        {projects.length > 6 && (
          <motion.div
            className="project-filters mb-5"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Row className="g-3">
              <Col lg={4}>
                <InputGroup>
                  <InputGroup.Text className="filter-addon">
                    <FaSearch />
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Search projects..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="filter-input"
                  />
                </InputGroup>
              </Col>
              
              <Col lg={3}>
                <Form.Select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="filter-select"
                >
                  {getCategories().map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </Form.Select>
              </Col>
              
              <Col lg={3}>
                <Form.Select
                  value={selectedTech}
                  onChange={(e) => setSelectedTech(e.target.value)}
                  className="filter-select"
                >
                  <option value="All">All Technologies</option>
                  {getAllTechnologies().map(tech => (
                    <option key={tech} value={tech}>{tech}</option>
                  ))}
                </Form.Select>
              </Col>
              
              <Col lg={2}>
                <Form.Select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="filter-select"
                >
                  <option value="updated">Last Updated</option>
                  <option value="stars">Most Stars</option>
                  <option value="forks">Most Forks</option>
                  <option value="name">Name</option>
                </Form.Select>
              </Col>
            </Row>
            
            <div className="mt-3 text-center">
              <small style={{ color: "#b4b4b4" }}>
                Showing {filteredProjects.length} of {projects.length} projects
              </small>
            </div>
          </motion.div>
        )}

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence>
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project, index) => (
                  <Col md={6} lg={4} className="project-card" key={project.id || index}>
                    <motion.div
                      layout
                      variants={{
                        hidden: { y: 50, opacity: 0 },
                        visible: { 
                          y: 0, 
                          opacity: 1,
                          transition: {
                            duration: 0.6,
                            delay: index * 0.1
                          }
                        }
                      }}
                      whileHover={{ 
                        scale: 1.03,
                        transition: { duration: 0.3 }
                      }}
                      exit={{ scale: 0.8, opacity: 0 }}
                    >
                      <ProjectCard 
                        title={project.title}
                        description={project.description}
                        techStack={project.techStack}
                        githubUrl={project.githubUrl || project.ghLink}
                        demoUrl={project.demoUrl || project.demoLink}
                        stars={project.stars}
                        forks={project.forks}
                        language={project.language}
                        updatedAt={project.updatedAt}
                        isGitHubProject={project.isGitHubProject !== false}
                        imgPath={project.imgPath}
                        isBlog={project.isBlog}
                      />
                    </motion.div>
                  </Col>
                ))
              ) : (
                <Col>
                  <div className="text-center mt-5">
                    <h4 style={{ color: "#b4b4b4" }}>No projects found</h4>
                    <p style={{ color: "#8a8a8a" }}>
                      Try adjusting your search or filter criteria
                    </p>
                  </div>
                </Col>
              )}
            </Row>
          </AnimatePresence>
        </motion.div>

        {/* GitHub Profile Link */}
        <div className="text-center mt-5">
          <motion.a
            href="https://github.com/shahrob"
            target="_blank"
            rel="noreferrer"
            className="github-profile-link"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaExternalLinkAlt className="me-2" />
            View Full GitHub Profile
          </motion.a>
        </div>
      </Container>
    </Container>
  );
}

export default Projects;
