import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import Particle from "../Particle";
import AnimatedSection from "../AnimatedSection";

function Skills() {
  // Mirrors the "Technical Expertise" list on the Upwork profile and the
  // skills on LinkedIn.
  const skillCategories = [
    {
      category: "Frontend",
      color: "#61dafb",
      skills: ["React.js", "Next.js", "JavaScript", "TypeScript", "HTML", "CSS", "Responsive UI"],
    },
    {
      category: "Mobile",
      color: "#61dafb",
      skills: ["React Native", "Android (Java)", "iOS", "Redux Toolkit", "React Navigation", "Push Notifications", "WebRTC"],
    },
    {
      category: "Backend",
      color: "#339933",
      skills: ["Node.js", "NestJS", "Express.js", "REST APIs", "Microservices", "Webhooks", "JWT", "OAuth", "RBAC"],
    },
    {
      category: "AI",
      color: "#c770f0",
      skills: ["OpenAI", "LLM Integration", "RAG", "AI Agents", "Chatbots", "Embeddings", "Vector Search", "pgvector", "Prompt Engineering"],
    },
    {
      category: "Databases",
      color: "#47a248",
      skills: ["PostgreSQL", "MongoDB", "Redis", "SQL", "Mongoose"],
    },
    {
      category: "Payments & Integrations",
      color: "#635bff",
      skills: ["Stripe", "Open Banking (Yapily)", "HMRC & FBR APIs", "Subscriptions", "Third-Party APIs"],
    },
    {
      category: "DevOps",
      color: "#ff9900",
      skills: ["AWS EC2 & S3", "Docker", "Git", "CI/CD", "Vercel", "Linux", "Nginx"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <Container fluid className="skills-section">
      <Particle />
      <Container>
        <AnimatedSection>
          <Row>
            <Col>
              <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
                Professional{" "}
                <strong className="purple">Skills & Expertise</strong>
              </h1>
              <p
                style={{
                  color: "white",
                  textAlign: "center",
                  fontSize: "1.1em",
                }}
              >
                The technologies I use to build web, mobile, backend and AI
                products
              </p>
            </Col>
          </Row>
        </AnimatedSection>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skillCategories.map((category, categoryIndex) => (
            <AnimatedSection key={categoryIndex} delay={categoryIndex * 0.2}>
              <Row style={{ marginBottom: "40px" }}>
                <Col>
                  <motion.h3
                    className="purple"
                    style={{ marginBottom: "30px", textAlign: "center" }}
                    variants={itemVariants}
                  >
                    {category.category}
                  </motion.h3>
                  <motion.div
                    className="tech-tags"
                    style={{ justifyContent: "center" }}
                    variants={itemVariants}
                  >
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="tech-tag"
                        style={{
                          borderColor: category.color,
                          fontSize: "1em",
                          padding: "8px 16px",
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </motion.div>
                </Col>
              </Row>
            </AnimatedSection>
          ))}
        </motion.div>
      </Container>
    </Container>
  );
}

export default Skills;
