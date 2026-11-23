import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import Particle from "../Particle";
import AnimatedSection from "../AnimatedSection";
import { FaQuoteLeft, FaLinkedin, FaExternalLinkAlt } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";

function Testimonials() {
  // Only real, checkable feedback: this page points to the recommendations
  // and testimonials published on LinkedIn and Upwork.
  const sources = [
    {
      id: 1,
      icon: FaLinkedin,
      color: "#0a66c2",
      title: "LinkedIn Recommendations",
      summary:
        "3 recommendations on my LinkedIn profile from people I have worked with.",
      linkLabel: "Read on LinkedIn",
      url: "https://www.linkedin.com/in/shahrob-abbas/"
    },
    {
      id: 2,
      icon: SiUpwork,
      color: "#14a800",
      title: "Upwork Testimonials",
      summary:
        "2 verified testimonials on my Upwork profile for full stack web and mobile work.",
      linkLabel: "Read on Upwork",
      url: "https://www.upwork.com/freelancers/~01589f1d414475058b"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15
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

  return (
    <Container fluid className="testimonials-section">
      <Particle />
      <Container>
        <AnimatedSection>
          <Row>
            <Col>
              <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
                Recommendations & <strong className="purple">Testimonials</strong>
              </h1>
              <p style={{ color: "white", textAlign: "center", fontSize: "1.1em" }}>
                What colleagues and clients say about working with me, on the platforms where they wrote it
              </p>
            </Col>
          </Row>
        </AnimatedSection>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Row style={{ justifyContent: "center" }}>
            {sources.map((source) => (
              <Col md={6} lg={5} key={source.id} className="testimonial-card-col">
                <motion.div
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Card className="testimonial-card">
                    <Card.Body>
                      <div className="quote-icon">
                        <FaQuoteLeft color="#c770f0" size={24} />
                      </div>

                      <h4 style={{ color: "white", marginBottom: "15px" }}>
                        <source.icon color={source.color} style={{ marginRight: "10px" }} />
                        {source.title}
                      </h4>

                      <div className="testimonial-content">
                        <p className="testimonial-text">{source.summary}</p>
                      </div>

                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-button"
                        style={{ display: "inline-block", marginTop: "10px" }}
                      >
                        <FaExternalLinkAlt style={{ marginRight: "8px" }} />
                        {source.linkLabel}
                      </a>
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

export default Testimonials;
