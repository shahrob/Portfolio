import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import Particle from "../Particle";
import AnimatedSection from "../AnimatedSection";
import { BsBriefcase, BsCalendar, BsGeoAlt } from "react-icons/bs";

function Experience() {
  // Kept in sync with the Experience section on LinkedIn and the
  // Employment history section on Upwork.
  const experiences = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      company: "Meta Logix Tech",
      location: "Sahiwal, Pakistan",
      period: "October 2022 - Present",
      type: "Full-time",
      summary:
        "Senior Full Stack Developer building FinTech, SaaS, marketplace and e-commerce products.",
      achievements: [
        "Built Node.js/NestJS microservices and REST APIs with PostgreSQL, MongoDB and Redis",
        "Built React, Next.js and React Native apps for web, iOS and Android",
        "Integrated Stripe subscriptions, Yapily open banking and HMRC (Making Tax Digital) APIs",
        "Built an AI image search: LLM image descriptions, embeddings and pgvector similarity search",
        "Fixed cross-country WebRTC audio/video calling with TURN server setup",
        "Built a financial market data platform using S&P Global APIs",
        "Deployed and maintained apps on AWS (EC2, S3) with Docker and CI/CD"
      ],
      technologies: [
        "Node.js",
        "NestJS",
        "React",
        "Next.js",
        "React Native",
        "TypeScript",
        "PostgreSQL",
        "pgvector",
        "MongoDB",
        "Redis",
        "Stripe",
        "Yapily Open Banking",
        "WebRTC",
        "AWS (EC2, S3)",
        "Docker",
        "CI/CD"
      ]
    },
    {
      id: 2,
      title: "Application Developer (React Native)",
      company: "Dynamic Logix",
      location: "Sahiwal, Pakistan",
      period: "October 2020 - October 2022",
      type: "Full-time",
      summary: "React Native mobile app developer for iOS and Android.",
      achievements: [
        "Built and shipped React Native apps to Google Play and the App Store",
        "Built reusable, scalable UI components and integrated REST APIs",
        "Implemented Firebase, push notifications, authentication and payment gateways",
        "Optimized app performance and managed iOS and Android production releases",
        "Started as an Android developer (Java) before moving to React Native"
      ],
      technologies: [
        "React Native",
        "JavaScript",
        "Redux",
        "Firebase",
        "Push Notifications",
        "REST APIs",
        "Android (Java)"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <Container fluid className="experience-section">
      <Particle />
      <Container>
        <AnimatedSection>
          <Row>
            <Col>
              <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
                Professional <strong className="purple">Experience</strong>
              </h1>
              <p style={{ color: "white", textAlign: "center", fontSize: "1.1em" }}>
                6+ years building web, mobile, SaaS and AI-powered products
              </p>
            </Col>
          </Row>
        </AnimatedSection>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Row>
            <Col>
              <div className="timeline">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    variants={itemVariants}
                    className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card className="experience-card">
                      <Card.Body>
                        <div className="experience-header">
                          <h4 className="purple">{exp.title}</h4>
                          <h5 style={{ color: "white", marginBottom: "10px" }}>{exp.company}</h5>
                          <div className="experience-meta">
                            <span className="meta-item">
                              <BsCalendar /> {exp.period}
                            </span>
                            <span className="meta-item">
                              <BsGeoAlt /> {exp.location}
                            </span>
                            <span className="meta-item">
                              <BsBriefcase /> {exp.type}
                            </span>
                          </div>
                        </div>

                        <p style={{ color: "white", marginTop: "15px", marginBottom: 0 }}>
                          {exp.summary}
                        </p>

                        <div className="experience-achievements">
                          <h6 style={{ color: "#c770f0", marginTop: "15px" }}>Key Achievements:</h6>
                          <ul>
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} style={{ color: "white", marginBottom: "5px" }}>{achievement}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="experience-technologies">
                          <h6 style={{ color: "#c770f0", marginTop: "15px" }}>Technologies Used:</h6>
                          <div className="tech-tags">
                            {exp.technologies.map((tech, i) => (
                              <span key={i} className="tech-tag">{tech}</span>
                            ))}
                          </div>
                        </div>

                      </Card.Body>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </Container>
  );
}

export default Experience;
