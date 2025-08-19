import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { motion } from "framer-motion";
import { BsGithub } from "react-icons/bs";
import { FaExternalLinkAlt, FaStar, FaCodeBranch, FaCode, FaCalendarAlt, FaImage } from "react-icons/fa";

function ProjectCards({
  title,
  description,
  techStack = [],
  githubUrl,
  demoUrl,
  stars = 0,
  forks = 0,
  language,
  updatedAt,
  isGitHubProject = false,
  imgPath,
  isBlog = false,
  ghLink,
  demoLink
}) {
  
  const formatDate = (date) => {
    if (!date) return '';
    const now = new Date();
    const diffTime = Math.abs(now - new Date(date));
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 30) return `${diffDays} days ago`;
    if (diffDays < 365) return `${Math.ceil(diffDays / 30)} months ago`;
    return `${Math.ceil(diffDays / 365)} years ago`;
  };

  const getLanguageColor = (language) => {
    const colors = {
      'JavaScript': '#f1e05a',
      'TypeScript': '#2b7489',
      'Python': '#3572A5',
      'Java': '#b07219',
      'C++': '#f34b7d',
      'C#': '#239120',
      'PHP': '#4F5D95',
      'Ruby': '#701516',
      'Go': '#00ADD8',
      'Rust': '#dea584',
      'Swift': '#ffac45',
      'Kotlin': '#F18E33',
      'Dart': '#00B4AB',
      'HTML': '#e34c26',
      'CSS': '#1572B6',
      'SCSS': '#c6538c',
      'Vue': '#4FC08D',
      'React': '#61DAFB'
    };
    return colors[language] || '#8b949e';
  };

  // Use the appropriate links based on the project type
  const repoLink = githubUrl || ghLink;
  const liveLink = demoUrl || demoLink;

  return (
    <motion.div
      whileHover={{ 
        y: -5,
        transition: { duration: 0.3 }
      }}
    >
      <Card className="project-card-view h-100">
        {/* Project Image or Placeholder */}
        <div className="project-image-container">
          {imgPath ? (
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Card.Img 
                variant="top" 
                src={imgPath} 
                alt={title}
                className="project-image"
              />
            </motion.div>
          ) : (
            <div className="project-placeholder">
              <motion.div
                className="placeholder-content"
                initial={{ opacity: 0.7 }}
                whileHover={{ opacity: 1, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <FaCode size={40} color="#c770f0" />
                <p className="mt-2 mb-0">{title}</p>
              </motion.div>
            </div>
          )}
          
          {/* Project Type Badge */}
          <div className="project-type-badge">
            <Badge bg={isGitHubProject ? "success" : "primary"}>
              {isGitHubProject ? "GitHub" : "Featured"}
            </Badge>
          </div>
        </div>

        <Card.Body className="d-flex flex-column">
          {/* Project Header */}
          <div className="project-header mb-3">
            <Card.Title className="project-title">{title}</Card.Title>
            
            {isGitHubProject && (
              <div className="project-meta mb-2">
                <div className="d-flex align-items-center gap-3 flex-wrap">
                  {language && (
                    <span className="language-indicator">
                      <span 
                        className="language-dot"
                        style={{ backgroundColor: getLanguageColor(language) }}
                      ></span>
                      {language}
                    </span>
                  )}
                  
                  {stars > 0 && (
                    <span className="stat-item">
                      <FaStar className="stat-icon" />
                      {stars}
                    </span>
                  )}
                  
                  {forks > 0 && (
                    <span className="stat-item">
                      <FaCodeBranch className="stat-icon" />
                      {forks}
                    </span>
                  )}
                  
                  {updatedAt && (
                    <span className="stat-item">
                      <FaCalendarAlt className="stat-icon" />
                      {formatDate(updatedAt)}
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Project Description */}
          <Card.Text className="project-description flex-grow-1">
            {description}
          </Card.Text>

          {/* Tech Stack */}
          {techStack && techStack.length > 0 && (
            <div className="tech-stack mb-3">
              <div className="d-flex flex-wrap gap-1">
                {techStack.slice(0, 6).map((tech, index) => (
                  <Badge 
                    key={index} 
                    bg="secondary" 
                    className="tech-badge"
                    title={tech}
                  >
                    {tech}
                  </Badge>
                ))}
                {techStack.length > 6 && (
                  <Badge bg="light" text="dark" className="tech-badge">
                    +{techStack.length - 6}
                  </Badge>
                )}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="project-buttons mt-auto">
            <div className="d-flex gap-2 justify-content-center">
              {repoLink && (
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    variant="primary" 
                    href={repoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="project-btn"
                  >
                    <BsGithub className="btn-icon" />
                    {isBlog ? 'Blog' : isGitHubProject ? 'Repository' : 'GitHub'}
                  </Button>
                </motion.div>
              )}
              
              {!isBlog && liveLink && (
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="success"
                    href={liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="project-btn"
                  >
                    <FaExternalLinkAlt className="btn-icon" />
                    Live Demo
                  </Button>
                </motion.div>
              )}
            </div>
          </div>
        </Card.Body>
      </Card>
    </motion.div>
  );
}

export default ProjectCards;
