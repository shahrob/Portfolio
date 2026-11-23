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

  // Client and product work, kept in sync with the Projects section on
  // LinkedIn. These are shown first; public GitHub repositories follow.
  const featuredProjects = [
    {
      title: "MMAREKANI - B2B Marketplace, AI Image Search & WebRTC",
      role: "Backend Developer",
      category: "Backend/APIs",
      description:
        "B2B marketplace connecting buyers and suppliers directly. Restructured and stabilised the backend, then built real-time messaging (text, image and voice), WebRTC audio calling, FCM and PushKit notifications, and an AI image search pipeline: product images are described by an LLM, converted to embeddings and matched with similarity search in PostgreSQL.",
      techStack: ["Node.js", "PostgreSQL", "RAG", "AI Embeddings", "WebRTC", "Socket.IO", "Firebase FCM", "Apple PushKit"]
    },
    {
      title: "InvoiceMe - Open Banking Invoicing SaaS",
      role: "Full Stack Developer / Open Banking & SaaS Engineer",
      category: "Backend/APIs",
      description:
        "Backend services for a web-based invoicing SaaS: invoice creation, email delivery, banking integrations and automated invoicing workflows. Researched and integrated Yapily Open Banking, Sumsub identity verification and scheduled backend jobs.",
      techStack: ["Node.js", "Express.js", "MongoDB", "Mongoose", "Yapily Open Banking", "Sumsub", "Cron Jobs"],
      links: [{ label: "Live Site", url: "https://invoiceme.today" }]
    },
    {
      title: "UK Tax SaaS - HMRC, Open Banking & Stripe",
      role: "Backend Developer",
      category: "Backend/APIs",
      description:
        "Backend services for Making Tax Digital Simple, a UK tax SaaS with Admin, Bookkeeper, Accountant and Client roles. Integrated HMRC for VAT and tax workflows, Yapily Open Banking for consent-based payments, Sumsub verification, Stripe subscriptions, email services and cron jobs.",
      techStack: ["Node.js", "Express.js", "Mongoose", "HMRC APIs", "Yapily", "Sumsub", "Stripe"],
      links: [{ label: "Live Site", url: "https://makingtaxdigitalsimple.com" }]
    },
    {
      title: "WAZIN - GCC Financial Markets App Backend",
      role: "Backend Developer",
      category: "Backend/APIs",
      description:
        "Backend services for a GCC financial-market mobile app, integrating S&P Global APIs for companies, listings, tickers, sectors, market indices and market performance. Built secure authentication, real-time communication, push notifications and cloud media storage.",
      techStack: ["Node.js", "Express.js", "S&P Global APIs", "JWT", "Firebase Cloud Messaging", "Socket.IO", "AWS S3"]
    },
    {
      title: "Vissioon - Multi-Tenant Coaching SaaS",
      role: "Backend Developer",
      category: "Backend/APIs",
      description:
        "Backend services for a multi-tenant SaaS for coaches built on microservices: three applications and databases serving Admin, Sub-Admin, Coach, Client and Sub-Client workflows. Implemented Stripe subscriptions, coach website creation, client payment plans, programs, portals, calendar events, email templates and community features.",
      techStack: ["Node.js", "Express.js", "MongoDB", "React", "Microservices", "Stripe"],
      links: [{ label: "Live Site", url: "https://vissioon.co" }]
    },
    {
      title: "FrogEater - iOS App Backend & AI Verification",
      role: "Backend Developer",
      category: "Backend/APIs",
      description:
        "Backend for an iOS app with Apple Sign-In, In-App Purchases and access control. Built AI-powered before/after image verification for task completion, with image URLs that expire after 15 minutes to protect uploads.",
      techStack: ["Node.js", "Apple Sign-In", "In-App Purchases", "AI Image Analysis"]
    },
    {
      title: "OphthoWorld - Online Exam Platform",
      role: "Backend Developer",
      category: "Backend/APIs",
      description:
        "Ophthalmology training and assessment platform for residents preparing for OKAP, ABO, Royal College and ICO exams, with 2,500+ board-style questions across 11 subspecialties. Owned the backend from requirements and ERD design through assessment statistics, first-attempt leaderboards, rankings, Moyasar payments, PDF invoices and email workflows.",
      techStack: ["Node.js", "Express.js", "MongoDB", "JWT", "Joi", "Moyasar"]
    },
    {
      title: "LA Moving Star - Logistics Platform Backend",
      role: "Backend Developer",
      category: "Backend/APIs",
      description:
        "Backend services for a logistics tracking platform supporting Admin, Company, Client, Foreman, Salesman and Driver workflows. Implemented Google Calendar OAuth so users can connect their calendars and create events from the application.",
      techStack: ["Node.js", "Express.js", "SQL", "Sequelize", "Google Calendar API", "Google Maps"],
      links: [{ label: "Live Site", url: "https://client.lamovingstar.com" }]
    },
    {
      title: "DONE - Task Management App",
      role: "React Native & Backend Developer",
      category: "Full Stack",
      description:
        "Web and mobile task and performance management platform. Contributed to both the React Native app and the backend: UI, state management, API integration, task management and performance tracking across iOS, Android and web.",
      techStack: ["React Native", "Node.js", "Express.js", "Socket.IO", "REST APIs", "Microservices"],
      links: [{ label: "Live Site", url: "https://doneworkspace.com" }]
    },
    {
      title: "Khurshid Dairy - Full-Stack E-Commerce Store",
      role: "Founder & Full-Stack Engineer",
      category: "Full Stack",
      description:
        "My own D2C desi ghee business: a complete live e-commerce platform built with Next.js, backend APIs, Redux state management, MongoDB Atlas and Nodemailer email notifications, with a cost-efficient deployment on Vercel and managed services.",
      techStack: ["Next.js", "Redux", "MongoDB Atlas", "Nodemailer", "Vercel"],
      links: [{ label: "Live Site", url: "https://khurshiddairy.online" }]
    },
    {
      title: "CalmVibe - Meditation & Habit Tracker App",
      role: "React Native Developer",
      category: "Mobile Apps",
      description:
        "Meditation and habit tracker app with meditation tracks, a habit tracker, daily quotes and daily notes. Handled UI development, state management, API integration and cross-platform optimisation for iOS and Android.",
      techStack: ["React Native", "JavaScript", "iOS", "Android", "In-App Purchases"],
      links: [
        { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.calmvibe.app" },
        { label: "App Store", url: "https://apps.apple.com/us/app/calmvibe-meditation-and-habit/id6450288489" }
      ]
    },
    {
      title: "SoulCalm - Meditation App for iOS & Android",
      role: "React Native Developer",
      category: "Mobile Apps",
      description:
        "Meditation app offering a range of meditation tracks with an intuitive interface. Handled UI development, state management, API integration and smooth cross-platform performance on iOS and Android.",
      techStack: ["React Native", "JavaScript", "iOS", "Android", "In-App Purchases"],
      links: [
        { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.coachingoflife.app" },
        { label: "App Store", url: "https://apps.apple.com/pk/app/soulcalm-relax-meditation/id1643130857" }
      ]
    },
    {
      title: "Postit - Dental App for iOS & Android",
      role: "React Native Developer",
      category: "Mobile Apps",
      description:
        "Spanish-language dental app for a Spain-based client with Admin and Client workflows. Built the mobile UI, API integration, state management and cross-platform functionality in React Native.",
      techStack: ["React Native", "JavaScript", "iOS", "Android"],
      links: [
        { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.p.postit" },
        { label: "App Store", url: "https://apps.apple.com/us/app/post-it/id1628257892" }
      ]
    },
    {
      title: "The Source Clone - Personal Development App",
      role: "React Native Developer",
      category: "Mobile Apps",
      description:
        "In-house React Native clone of 'The Source' app, focused on UI development, state management and API integration, optimised for both iOS and Android.",
      techStack: ["React Native", "JavaScript", "iOS", "Android"]
    }
  ].map((project) => ({
    ...project,
    name: project.title,
    stars: 0,
    forks: 0,
    isGitHubProject: false,
    isBlog: false
  }));

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

        // Featured client work first, public GitHub repositories after
        const combinedProjects = [...featuredProjects, ...processedProjects];
        setProjects(combinedProjects);
      } else {
        setProjects(featuredProjects);
      }
    } catch (err) {
      console.error('GitHub fetch error:', err);
      setProjects(featuredProjects);
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
      // Featured client work always stays ahead of GitHub repositories
      const aFeatured = a.isGitHubProject === false;
      const bFeatured = b.isGitHubProject === false;
      if (aFeatured !== bFeatured) return aFeatured ? -1 : 1;

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
                FinTech, SaaS, marketplace, e-commerce and mobile products I've built, followed by my public GitHub repositories.
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
                        role={project.role}
                        links={project.links}
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
