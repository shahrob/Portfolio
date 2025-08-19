import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import Particle from "../Particle";
import AnimatedSection from "../AnimatedSection";
import { 
  FaReact, 
  FaMobile, 
  FaServer, 
  FaCloud, 
  FaDatabase, 
  FaPaintBrush,
  FaCode,
  FaTools
} from "react-icons/fa";

function Services() {
  const services = [
    {
      icon: FaReact,
      title: "Frontend Development",
      description: "Building modern, responsive, and interactive user interfaces using React.js, Next.js, and latest frontend technologies.",
      features: [
        "React.js & Next.js Applications",
        "Responsive Web Design",
        "Progressive Web Apps (PWA)",
        "Single Page Applications (SPA)",
        "UI/UX Implementation",
        "Performance Optimization"
      ],
      color: "#61dafb"
    },
    {
      icon: FaMobile,
      title: "Mobile App Development",
      description: "Cross-platform mobile applications using React Native for iOS and Android with native performance.",
      features: [
        "React Native Development",
        "iOS & Android Apps",
        "Cross-Platform Solutions",
        "App Store Deployment",
        "Push Notifications",
        "Offline Functionality"
      ],
      color: "#61dafb"
    },
    {
      icon: FaServer,
      title: "Backend Development",
      description: "Scalable server-side applications and APIs using Node.js, NestJS, and modern backend technologies.",
      features: [
        "RESTful API Development",
        "GraphQL Implementation",
        "Node.js & NestJS",
        "Microservices Architecture",
        "Authentication & Authorization",
        "Real-time Applications"
      ],
      color: "#339933"
    },
    {
      icon: FaDatabase,
      title: "Database Design",
      description: "Designing and optimizing databases for performance, scalability, and data integrity.",
      features: [
        "Database Architecture",
        "MongoDB & PostgreSQL",
        "Data Modeling",
        "Query Optimization",
        "Migration Strategies",
        "Backup & Recovery"
      ],
      color: "#47a248"
    },
    {
      icon: FaCloud,
      title: "Cloud & DevOps",
      description: "Cloud infrastructure setup, deployment automation, and DevOps practices for scalable applications.",
      features: [
        "AWS Cloud Services",
        "Docker Containerization",
        "CI/CD Pipelines",
        "Infrastructure as Code",
        "Monitoring & Logging",
        "Performance Optimization"
      ],
      color: "#ff9900"
    },
    {
      icon: FaCode,
      title: "Full Stack Solutions",
      description: "End-to-end web applications combining frontend, backend, and database technologies.",
      features: [
        "Complete Web Applications",
        "E-commerce Solutions",
        "Content Management Systems",
        "Dashboard & Analytics",
        "Third-party Integrations",
        "Custom Business Solutions"
      ],
      color: "#c770f0"
    },
    // {
    //   icon: FaPaintBrush,
    //   title: "UI/UX Consultation",
    //   description: "User experience optimization and interface design consultation for better user engagement.",
    //   features: [
    //     "User Experience Audit",
    //     "Interface Design Review",
    //     "Usability Testing",
    //     "Design System Creation",
    //     "Accessibility Compliance",
    //     "Performance Analysis"
    //   ],
    //   color: "#f24e1e"
    // },
    {
      icon: FaTools,
      title: "Technical Consultation",
      description: "Technical advisory services for architecture decisions, technology stack selection, and best practices.",
      features: [
        "Technology Stack Selection",
        "Architecture Planning",
        "Code Review & Audit",
        "Performance Optimization",
        "Team Training",
        "Best Practices Implementation"
      ],
      color: "#0052cc"
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
                Comprehensive development services to bring your ideas to life
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
