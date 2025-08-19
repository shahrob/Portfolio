import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import Particle from "../Particle";
import AnimatedSection from "../AnimatedSection";
import { BsBriefcase, BsCalendar, BsGeoAlt } from "react-icons/bs";

function Experience() {
  const experiences = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      company: "Meta Logix Tech",
      location: "Pakistan",
      period: "October 2020 - Present",
      type: "Full-time",
      description: [
        "Lead development of scalable web and mobile applications using React, React Native, and Node.js",
        "Architect and implement microservices-based backend systems with NestJS and Express.js",
        "Manage cloud infrastructure on AWS and implement CI/CD pipelines",
        "Mentor junior developers and conduct code reviews",
        "Collaborate with cross-functional teams to deliver high-quality products"
      ],
      technologies: ["React", "React Native", "Node.js", "NestJS", "MongoDB", "AWS", "Docker","Android","IOS","Fast Api","Pandas","Numpanda"],
      achievements: [
        "Increased application performance by 40% through optimization",
        "Led team of 5 developers on major client projects",
        "Implemented automated testing reducing bugs by 60%"
      ]
    },
    {
  id: 2,
  title: "Node.js Backend Developer",
  company: "Dynamin Logix , Meta Logix Tech",
  location: "Sahiwal",
  period: "January 2023 - October 2023",
  type: "Full-time",
  description: [
    "Developed and maintained scalable backend services using Node.js and Express.js",
    "Designed and implemented RESTful APIs and integrated third-party services",
    "Worked on database schema design, optimization, and queries with MongoDB and PostgreSQL",
    "Implemented real-time communication features using Socket.io",
    "Ensured security best practices including authentication, authorization, and data validation",
    "Collaborated with frontend developers to deliver complete end-to-end solutions"
  ],
  technologies: [
    "Node.js",
    "Nest.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "Socket.io",
    "JWT",
    "Redis",
    "Docker",
    "Git"
  ],
  achievements: [
    "Delivered 2+ backend services and APIs successfully within deadlines",
    "Optimized database queries and API endpoints, reducing response time by 35%",
    "Implemented a scalable real-time chat system supporting 10k+ concurrent users",
    "Improved system reliability by setting up caching and session management with Redis"
  ]
},
    {
  id: 3,
  title: "Associate Mobile Developer",
  company: "Dynamic Logix",
  location: "Sahiwal, Pakistan",
  period: "December 2021 - January 2023",
  type: "Full Time",
  description: [
    "Developed and maintained cross-platform mobile applications using React Native",
    "Implemented reusable components and responsive UI for iOS and Android",
    "Integrated RESTful APIs, WebSockets, and third-party libraries for real-time features",
    "Added in-app purchase functionality and payment gateways for monetization",
    "Implemented location-based features and interactive maps",
    "Utilized Redux for scalable state management across complex workflows",
    "Collaborated with designers and backend developers to deliver production-ready solutions"
  ],
  technologies: [
    "React Native",
    "Redux",
    "JavaScript",
    "TypeScript",
    "Expo/CLI",
    "REST APIs",
    "WebSockets",
    "In-App Purchases",
    "Google Maps SDK",
    "Firebase",
    "Git"
  ],
  achievements: [
    "Delivered 4 client mobile applications successfully from development to deployment",
    "Integrated real-time features using sockets, improving app interactivity",
    "Implemented in-app purchases and payment integrations to drive revenue",
    "Enhanced user engagement and retention with map-based and location-aware features",
    "Optimized app performance across iOS and Android, reducing crashes and load times"
  ]
},
    {
  id: 4,
  title: "Junior React Native Developer",
  company: "Dynamic Logix",
  location: "Sahiwal, Pakistan",
  period: "December 2020 - December 2021",
  type: "Full Time",
  description: [
    "Developed cross-platform mobile applications using React Native",
    "Implemented reusable components and responsive UI for iOS and Android",
    "Integrated RESTful APIs and third-party libraries for enhanced functionality",
    "Worked with Redux for state management across complex app flows",
    "Collaborated with designers and backend developers to deliver complete solutions"
  ],
  technologies: ["React Native", "Redux", "JavaScript", "CLI", "REST APIs", "Git"],
  achievements: [
    "Delivered 4 client mobile apps successfully within deadlines",
    "Enhanced app performance and reduced load times across devices",
    "Improved user engagement through UI/UX improvements"
  ]
},
    {
     
  id: 5,
  title: "Android Developer Intern",
  company: "Dynamic Logix",
  location: "Pakistan",
  period: "October 2020 - December 2020",
  type: "Internship",
  description: [
    "Assisted in designing and developing Android applications using Java and XML",
    "Worked on UI implementation, layouts, and responsive design for different screen sizes",
    "Integrated RESTful APIs to fetch and display data in mobile apps",
    "Collaborated with senior developers in debugging and testing Android applications",
    "Participated in code reviews and learned modern mobile development practices"
  ],
  technologies: ["Java", "Android Studio", "XML", "SQLite", "REST APIs", "Git"],
  achievements: [
    "Contributed to 2 Android applications from development to testing phase",
    "Gained strong foundation in Android app lifecycle and architecture",
    "Recognized for quickly adapting to new tools and technologies during internship"
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
                My journey as a Full Stack Developer - building amazing products and solutions
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

                        <div className="experience-description">
                          <h6 style={{ color: "#c770f0", marginTop: "15px" }}>Key Responsibilities:</h6>
                          <ul>
                            {exp.description.map((desc, i) => (
                              <li key={i} style={{ color: "white", marginBottom: "5px" }}>{desc}</li>
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

                        <div className="experience-achievements">
                          <h6 style={{ color: "#c770f0", marginTop: "15px" }}>Key Achievements:</h6>
                          <ul>
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} style={{ color: "#a588c0", marginBottom: "5px" }}>{achievement}</li>
                            ))}
                          </ul>
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
