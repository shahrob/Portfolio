import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import AnimatedSection from "../AnimatedSection";

function Home() {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <Row>
              <Col md={7} className="home-header">
                <motion.h1 
                  style={{ paddingBottom: 15 }} 
                  className="heading"
                  variants={itemVariants}
                >
                  Hi There!{" "}
                  <motion.span 
                    className="wave" 
                    role="img" 
                    aria-labelledby="wave"
                    animate={{ 
                      rotate: [0, 14, -8, 14, -4, 10, 0] 
                    }}
                    transition={{ 
                      duration: 2.5,
                      repeat: Infinity,
                      repeatDelay: 1
                    }}
                  >
                    👋🏻
                  </motion.span>
                </motion.h1>

                <motion.h1 className="heading-name" variants={itemVariants}>
                  I'M
                  <strong className="main-name"> Muhammad Shahrob Abbas</strong>
                </motion.h1>

                <motion.div 
                  style={{ padding: 50, textAlign: "left" }}
                  variants={itemVariants}
                >
                  <Type />
                </motion.div>
              </Col>

              <Col md={5} style={{ paddingBottom: 20 }}>
                <motion.img
                  src={homeLogo}
                  alt="home pic"
                  className="img-fluid"
                  style={{ maxHeight: "450px" }}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                />
              </Col>
            </Row>
          </motion.div>
        </Container>
      </Container>
      <AnimatedSection>
        <Home2 />
      </AnimatedSection>
    </section>
  );
}

export default Home;
