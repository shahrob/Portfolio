import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  const quickLinks = [
    { name: "View My Skills", path: "/skills", color: "#61dafb" },
    { name: "See Experience", path: "/experience", color: "#339933" },
    { name: "Browse Projects", path: "/projects", color: "#c770f0" },
    { name: "My Services", path: "/services", color: "#ff9900" },
    { name: "Get In Touch", path: "/contact", color: "#f24e1e" }
  ];

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <motion.h1 
              style={{ fontSize: "2.6em" }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </motion.h1>
            <motion.p 
              className="home-about-body"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple">
                  {" "}
                  C++, Java, Javascript and TypeScript .{" "}
                </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web || App Technologies and Products </b>{" "}
                and also in areas related to{" "}
                <b className="purple">Backend Services.</b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js, NestJS</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React Native.js and React.js</b>
              </i>
            </motion.p>

            {/* Quick Navigation Links */}
            <motion.div 
              className="quick-links"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              style={{ marginTop: "40px" }}
            >
              <h3 style={{ color: "#c770f0", marginBottom: "20px" }}>
                Explore My Portfolio
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
                {quickLinks.map((link, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      as={Link}
                      to={link.path}
                      variant="outline-primary"
                      style={{
                        borderColor: link.color,
                        color: link.color,
                        backgroundColor: "transparent",
                        borderRadius: "25px",
                        padding: "8px 20px",
                        fontSize: "0.9em",
                        fontWeight: "500",
                        transition: "all 0.3s ease"
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = link.color;
                        e.target.style.color = "white";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = "transparent";
                        e.target.style.color = link.color;
                      }}
                    >
                      {link.name}
                    </Button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Col>
          <Col md={4} className="myAvtar">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Tilt>
                <img src={myImg} className="img-fluid animate-float" alt="avatar" />
              </Tilt>
            </motion.div>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              FIND ME ON
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              Feel free to <span className="purple">connect </span>with me
            </motion.p>
            <motion.ul 
              className="home-about-social-links"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <li className="social-icons">
                <motion.a
                  href="https://github.com/shahrob"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <AiFillGithub />
                </motion.a>
              </li>
              <li className="social-icons">
                <motion.a
                  href="https://twitter.com/shahrob_abbas"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <AiOutlineTwitter />
                </motion.a>
              </li>
              <li className="social-icons">
                <motion.a
                  href="https://www.linkedin.com/in/shahrob-abbas/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaLinkedinIn />
                </motion.a>
              </li>
              <li className="social-icons">
                <motion.a
                  href="https://www.instagram.com/shahrob1"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <AiFillInstagram />
                </motion.a>
              </li>
            </motion.ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
