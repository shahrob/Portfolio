import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import Particle from "../Particle";
import AnimatedSection from "../AnimatedSection";
import { 
  FaProjectDiagram, 
  FaUsers, 
  FaCode, 
  FaTrophy,
  FaCoffee,
  FaCalendarAlt,
  FaGithub,
  FaStar
} from "react-icons/fa";

function Stats() {
  const stats = [
    {
      icon: FaProjectDiagram,
      number: "50+",
      label: "Projects Completed",
      description: "Successfully delivered projects across various industries",
      color: "#c770f0"
    },
    {
      icon: FaUsers,
      number: "30+",
      label: "Happy Clients",
      description: "Satisfied clients from startups to enterprise companies",
      color: "#61dafb"
    },
    {
      icon: FaCode,
      number: "100K+",
      label: "Lines of Code",
      description: "Clean, efficient, and maintainable code written",
      color: "#339933"
    },
    {
      icon: FaCalendarAlt,
      number: "5+",
      label: "Years Experience",
      description: "Professional development experience in the industry",
      color: "#ff9900"
    },
    {
      icon: FaGithub,
      number: "200+",
      label: "GitHub Commits",
      description: "Active contributions to open source projects",
      color: "#333"
    },
    {
      icon: FaTrophy,
      number: "15+",
      label: "Awards & Recognition",
      description: "Industry recognition and client appreciation",
      color: "#ffd700"
    },
    {
      icon: FaCoffee,
      number: "1000+",
      label: "Cups of Coffee",
      description: "Fuel for those late-night coding sessions",
      color: "#8b4513"
    },
    {
      icon: FaStar,
      number: "4.9/5",
      label: "Client Rating",
      description: "Average rating from client feedback",
      color: "#ffd700"
    }
  ];

  const achievements = [
    {
      title: "Top Rated Freelancer",
      description: "Achieved top-rated status on multiple freelancing platforms",
      year: "2023"
    },
    {
      title: "Best Mobile App Award",
      description: "Won best mobile app award for SoulCalm meditation app",
      year: "2022"
    },
    {
      title: "Employee of the Year",
      description: "Recognized as Employee of the Year at Meta Logix Tech",
      year: "2021"
    },
    {
      title: "Open Source Contributor",
      description: "Active contributor to React and Node.js open source projects",
      year: "2020-Present"
    }
  ];

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

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const numberVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <Container fluid className="stats-section">
      <Particle />
      <Container>
        <AnimatedSection>
          <Row>
            <Col>
              <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
                My <strong className="purple">Achievements</strong>
              </h1>
              <p style={{ color: "white", textAlign: "center", fontSize: "1.1em" }}>
                Numbers that showcase my journey and dedication to excellence
              </p>
            </Col>
          </Row>
        </AnimatedSection>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Row className="stats-grid">
            {stats.map((stat, index) => (
              <Col md={6} lg={3} key={index} className="stat-card-col">
                <motion.div
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                  className="stat-card"
                >
                  <div className="stat-icon" style={{ color: stat.color }}>
                    <stat.icon size={40} />
                  </div>
                  <motion.div 
                    className="stat-number"
                    variants={numberVariants}
                    style={{ color: stat.color }}
                  >
                    {stat.number}
                  </motion.div>
                  <h4 className="stat-label">{stat.label}</h4>
                  <p className="stat-description">{stat.description}</p>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>

        {/* Achievements Timeline */}
        <AnimatedSection delay={0.6}>
          <Row style={{ marginTop: "80px" }}>
            <Col>
              <h2 className="purple" style={{ textAlign: "center", marginBottom: "50px" }}>
                Key Milestones
              </h2>
              <div className="achievements-timeline">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    className="achievement-item"
                    initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ 
                      duration: 0.6,
                      delay: index * 0.2,
                      ease: "easeOut"
                    }}
                    whileHover={{ scale: 1.03 }}
                  >
                    <div className="achievement-content">
                      <div className="achievement-year">{achievement.year}</div>
                      <h4 className="achievement-title">{achievement.title}</h4>
                      <p className="achievement-description">{achievement.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Col>
          </Row>
        </AnimatedSection>

        {/* Call to Action */}
        <AnimatedSection delay={0.8}>
          <Row style={{ marginTop: "60px" }}>
            <Col>
              <div className="stats-cta">
                <h3 style={{ color: "white", textAlign: "center", marginBottom: "20px" }}>
                  Ready to be part of these numbers?
                </h3>
                <p style={{ color: "#a588c0", textAlign: "center", fontSize: "1.1em" }}>
                  Let's work together to create something amazing and add your project to my success stories.
                </p>
                <div style={{ textAlign: "center", marginTop: "30px" }}>
                  <motion.a
                    href="#contact"
                    className="cta-button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Start Your Project
                  </motion.a>
                </div>
              </div>
            </Col>
          </Row>
        </AnimatedSection>
      </Container>
    </Container>
  );
}

export default Stats;
