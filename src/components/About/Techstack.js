import React from "react";
import { Col, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiMysql,
  DiGit,
  DiJava,
  DiDocker,
} from "react-icons/di";
import { 
  SiRedis, 
  SiFirebase, 
  SiPostgresql, 
  SiRedux, 
  SiNestjs,
  SiExpress,
  SiGraphql,
  SiAmazonaws,
  SiKubernetes
} from "react-icons/si";
import { TbBrandTypescript, TbBrandReactNative } from "react-icons/tb";
import { FaApple } from "react-icons/fa";

function Techstack() {
  const techIcons = [
    { icon: CgCPlusPlus, name: "C++" },
    { icon: DiJavascript1, name: "JavaScript" },
    { icon: TbBrandTypescript, name: "TypeScript" },
    { icon: DiNodejs, name: "Node.js" },
    { icon: SiNestjs, name: "NestJS" },
    { icon: SiExpress, name: "Express.js" },
    { icon: DiReact, name: "React" },
    { icon: TbBrandReactNative, name: "React Native" },
    { icon: SiRedux, name: "Redux" },
    { icon: SiGraphql, name: "GraphQL" },
    { icon: DiMongodb, name: "MongoDB" },
    { icon: DiMysql, name: "MySQL" },
    { icon: SiPostgresql, name: "PostgreSQL" },
    { icon: SiRedis, name: "Redis" },
    { icon: SiFirebase, name: "Firebase" },
    { icon: DiGit, name: "Git" },
    { icon: DiDocker, name: "Docker" },
    { icon: SiKubernetes, name: "Kubernetes" },
    { icon: SiAmazonaws, name: "AWS" },
    { icon: DiJava, name: "Java" },
    { icon: FaApple, name: "iOS" }
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
        {techIcons.map((tech, index) => (
          <Col xs={4} md={2} className="tech-icons" key={index}>
            <motion.div
              variants={itemVariants}
              whileHover={{ 
                scale: 1.1,
                rotate: 5,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
              title={tech.name}
            >
              <tech.icon />
            </motion.div>
          </Col>
        ))}
      </Row>
    </motion.div>
  );
}

export default Techstack;
