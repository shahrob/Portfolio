import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import Particle from "../Particle";
import AnimatedSection from "../AnimatedSection";
import { Link } from "react-router-dom";
import {
  FaProjectDiagram,
  FaUsers,
  FaCalendarAlt,
  FaMobileAlt
} from "react-icons/fa";

function Stats() {
  // Every number here can be checked against my LinkedIn and Upwork profiles.
  const stats = [
    {
      icon: FaCalendarAlt,
      number: "6+",
      label: "Years Experience",
      description: "Building web, mobile and backend products professionally since 2020",
      color: "#ff9900"
    },
    {
      icon: FaProjectDiagram,
      number: "14",
      label: "Featured Projects",
      description: "FinTech, SaaS, marketplace, e-commerce and mobile products",
      color: "#c770f0"
    },
    {
      icon: FaMobileAlt,
      number: "3",
      label: "Store-Published Apps",
      description: "CalmVibe, SoulCalm and Postit on the App Store and Google Play",
      color: "#61dafb"
    },
    {
      icon: FaUsers,
      number: "5",
      label: "Recommendations",
      description: "3 LinkedIn recommendations and 2 verified Upwork testimonials",
      color: "#ffd700"
    }
  ];

  const achievements = [
    {
      title: "Started as an Android Developer",
      description: "Began my career building Android apps with Java at Dynamic Logix",
      year: "2020"
    },
    {
      title: "Application Developer (React Native)",
      description: "Built and shipped React Native apps to Google Play and the App Store at Dynamic Logix",
      year: "2020 - 2022"
    },
    {
      title: "Bachelor's in Computer Science",
      description: "Graduated from the University of Sahiwal",
      year: "2021"
    },
    {
      title: "Senior Full Stack Developer",
      description: "Joined Meta Logix Tech to build FinTech, SaaS, marketplace and e-commerce products",
      year: "2022 - Present"
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
                My journey so far, in numbers you can verify on LinkedIn and Upwork
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
                  Have a project in mind?
                </h3>
                <p style={{ color: "#a588c0", textAlign: "center", fontSize: "1.1em" }}>
                  Have a SaaS idea or need a web, mobile or AI solution? Let's discuss your requirements.
                </p>
                <div style={{ textAlign: "center", marginTop: "30px" }}>
                  <motion.div
                    style={{ display: "inline-block" }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link to="/contact" className="cta-button">
                      Start Your Project
                    </Link>
                  </motion.div>
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
