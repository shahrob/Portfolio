import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import Particle from "../Particle";
import AnimatedSection from "../AnimatedSection";
import {
  FaMobile,
  FaServer,
  FaCloud,
  FaDatabase,
  FaCode,
  FaRobot
} from "react-icons/fa";

function Services() {
  // Mirrors the "Core Services" list on the Upwork profile.
  const services = [
    {
      icon: FaCode,
      title: "Full Stack & SaaS Development",
      description: "Web apps, SaaS platforms, dashboards and portals with React.js, Next.js, Node.js, NestJS and TypeScript.",
      features: [
        "SaaS Products & Startup MVPs",
        "Multi-Tenant Platforms",
        "Dashboards & Admin Panels",
        "B2B Marketplaces & E-Commerce",
        "CRM Systems & Business Automation",
        "Payment & Subscription Integrations"
      ],
      color: "#c770f0"
    },
    {
      icon: FaMobile,
      title: "Mobile App Development",
      description: "iOS and Android apps with React Native: authentication, API integration, push notifications, WebRTC calling and maintainable architecture.",
      features: [
        "Cross-Platform iOS & Android Apps",
        "Authentication & API Integration",
        "Push Notifications",
        "WebRTC Video/Voice Calling",
        "In-App Purchases",
        "App Store & Google Play Releases"
      ],
      color: "#61dafb"
    },
    {
      icon: FaRobot,
      title: "AI Applications & Automation",
      description: "AI agents, LLM integrations, RAG pipelines, embeddings, vector search and automated workflows.",
      features: [
        "AI Agents & Chatbots",
        "LLM Integrations (OpenAI and other providers)",
        "RAG Pipelines",
        "Embeddings & Vector Search (pgvector)",
        "AI-Powered Image Search",
        "Workflow Automation"
      ],
      color: "#10a37f"
    },
    {
      icon: FaServer,
      title: "Backend & API Engineering",
      description: "Secure REST APIs, auth, RBAC, microservices and scalable architecture with Node.js, NestJS and Express.js.",
      features: [
        "REST APIs & Webhooks",
        "Authentication, JWT & OAuth",
        "Role-Based Access Control",
        "Microservices Architecture",
        "Real-Time Chat, Messaging & Notifications",
        "Stripe, Open Banking & Third-Party Integrations"
      ],
      color: "#339933"
    },
    {
      icon: FaDatabase,
      title: "Database Design & Performance",
      description: "PostgreSQL (pgvector), MongoDB, Redis, data modeling, query optimization, caching and background jobs.",
      features: [
        "Data Modeling",
        "PostgreSQL & pgvector",
        "MongoDB & Mongoose",
        "Redis Caching",
        "Query Optimization",
        "Background Jobs"
      ],
      color: "#47a248"
    },
    {
      icon: FaCloud,
      title: "Deployment & DevOps",
      description: "AWS (EC2, S3), Docker, CI/CD, Nginx, Linux, Git workflows and production deployment.",
      features: [
        "AWS EC2 & S3",
        "Docker",
        "CI/CD Pipelines",
        "Nginx & Linux",
        "Git Workflows",
        "Production Deployment"
      ],
      color: "#ff9900"
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <Container fluid className="services-section">
      <Particle />
      <Container>
        <AnimatedSection>
          <Row>
            <Col>
              <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
                Services <strong className="purple">I Offer</strong>
              </h1>
              <p style={{ color: "white", textAlign: "center", fontSize: "1.1em" }}>
                Web, mobile, backend and AI development, from architecture to deployment
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
            {services.map((service, index) => (
              <Col md={6} lg={4} key={index} className="service-card-col">
                <motion.div
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Card className="service-card">
                    <Card.Body>
                      <div className="service-icon" style={{ color: service.color }}>
                        <service.icon size={50} />
                      </div>
                      <h4 className="service-title purple">{service.title}</h4>
                      <p className="service-description">{service.description}</p>
                      
                      <div className="service-features">
                        <h6 style={{ color: service.color, marginBottom: "15px" }}>What's Included:</h6>
                        <ul className="features-list">
                          {service.features.map((feature, i) => (
                            <li key={i}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </Container>
  );
}

export default Services;
