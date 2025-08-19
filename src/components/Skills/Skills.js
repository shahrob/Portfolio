import React from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import { motion } from "framer-motion";
import Particle from "../Particle";
import AnimatedSection from "../AnimatedSection";

function Skills() {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: [
        { name: "React.js", level: 95, color: "#61dafb" },
        { name: "React Native", level: 95, color: "#61dafb" },
        { name: "JavaScript (ES6+)", level: 95, color: "#f7df1e" },
        { name: "TypeScript", level: 95, color: "#3178c6" },
        { name: "HTML5 & CSS3", level: 90, color: "#e34f26" },
        { name: "Redux/Context API", level: 95, color: "#764abc" }
      ]
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Node.js", level: 95, color: "#339933" },
        { name: "NestJS", level: 90, color: "#e0234e" },
        { name: "Express.js", level: 95, color: "#000000" },
        { name: "GraphQL", level: 80, color: "#e10098" },
        { name: "REST APIs", level: 95, color: "#ff6b35" },
        { name: "Microservices", level: 80, color: "#326ce5" }
      ]
    },
    {
      category: "Database & Cloud",
      skills: [
        { name: "MongoDB", level: 95, color: "#47a248" },
        { name: "PostgreSQL", level: 85, color: "#336791" },
        { name: "MySQL", level: 85, color: "#4479a1" },
        { name: "Redis", level: 80, color: "#dc382d" },
        { name: "AWS Services", level: 80, color: "#ff9900" },
        { name: "Docker", level: 80, color: "#2496ed" }
      ]
    },
    {
      category: "Tools & Technologies",
      skills: [
        { name: "Git & GitHub", level: 95, color: "#f05032" },
        { name: "VS Code", level: 95, color: "#007acc" },
        { name: "Postman", level: 85, color: "#ff6c37" },
        { name: "Figma", level: 80, color: "#f24e1e" },
        { name: "Jira", level: 80, color: "#0052cc" },
        { name: "Agile/Scrum", level: 85, color: "#c770f0" }
      ]
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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <Container fluid className="skills-section">
      <Particle />
      <Container>
        <AnimatedSection>
          <Row>
            <Col>
              <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
                Professional <strong className="purple">Skills & Expertise</strong>
              </h1>
              <p style={{ color: "white", textAlign: "center", fontSize: "1.1em" }}>
                Here's a breakdown of my technical expertise and proficiency levels
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
                  <Row>
                    {category.skills.map((skill, skillIndex) => (
                      <Col md={6} key={skillIndex} style={{ marginBottom: "20px" }}>
                        <motion.div variants={itemVariants}>
                          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px" }}>
                            <span style={{ color: "white", fontWeight: "500" }}>{skill.name}</span>
                            <span style={{ color: skill.color, fontWeight: "bold" }}>{skill.level}%</span>
                          </div>
                          <ProgressBar 
                            now={skill.level} 
                            style={{ 
                              height: "8px", 
                              backgroundColor: "rgba(255,255,255,0.1)",
                              borderRadius: "10px"
                            }}
                          >
                            <ProgressBar 
                              now={skill.level} 
                              style={{ 
                                backgroundColor: skill.color,
                                transition: "width 1.5s ease-in-out"
                              }}
                            />
                          </ProgressBar>
                        </motion.div>
                      </Col>
                    ))}
                  </Row>
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
