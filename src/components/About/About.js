import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import AnimatedSection from "../AnimatedSection";

function About() {
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
    hidden: { y: 30, opacity: 0 },
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
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <motion.h1 
                style={{ fontSize: "2.1em", paddingBottom: "20px" }}
                variants={itemVariants}
              >
                Know Who <strong className="purple">I'M</strong>
              </motion.h1>
              <motion.div variants={itemVariants}>
                <Aboutcard />
              </motion.div>
            </Col>
            <Col
              md={5}
              style={{ paddingTop: "120px", paddingBottom: "50px" }}
              className="about-img"
            >
              <motion.img 
                src={laptopImg} 
                alt="about" 
                className="img-fluid"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              />
            </Col>
          </Row>
        </motion.div>

        <AnimatedSection delay={0.2}>
          <h1 className="project-heading">
            Professional <strong className="purple">Skillset </strong>
          </h1>
          <Techstack />
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <h1 className="project-heading">
            <strong className="purple">Tools</strong> I use
          </h1>
          <Toolstack />
        </AnimatedSection>

        <AnimatedSection delay={0.6}>
          <Github />
        </AnimatedSection>
      </Container>
    </Container>
  );
}

export default About;
