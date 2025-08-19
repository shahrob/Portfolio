import React from "react";
import { Col, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  SiVisualstudiocode,
  SiPostman,
  SiMacos,
  SiAndroidstudio,
  SiXcode,
  SiFigma,
  SiSlack,
  SiTrello,
  SiNotion,
  SiGithub,
  SiJira
} from "react-icons/si";

function Toolstack() {
  const tools = [
    { icon: SiMacos, name: "macOS" },
    { icon: SiVisualstudiocode, name: "VS Code" },
    { icon: SiAndroidstudio, name: "Android Studio" },
    { icon: SiXcode, name: "Xcode" },
    { icon: SiPostman, name: "Postman" },
    { icon: SiFigma, name: "Figma" },
    { icon: SiGithub, name: "GitHub" },
    { icon: SiSlack, name: "Slack" },
    { icon: SiTrello, name: "Trello" },
    { icon: SiJira, name: "Jira" },
    { icon: SiNotion, name: "Notion" }
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
    hidden: { y: 20, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {tools.map((tool, index) => (
          <Col xs={4} md={2} className="tech-icons" key={index}>
            <motion.div
              variants={itemVariants}
              whileHover={{ 
                scale: 1.1,
                rotate: -5,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
              title={tool.name}
            >
              <tool.icon />
            </motion.div>
          </Col>
        ))}
      </Row>
    </motion.div>
  );
}

export default Toolstack;
