import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import Particle from "../Particle";
import AnimatedSection from "../AnimatedSection";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Product Manager",
      company: "TechCorp Solutions",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      rating: 5,
      testimonial: "Shahrob delivered an outstanding React Native app for our startup. His attention to detail and technical expertise exceeded our expectations. The app performs flawlessly across both iOS and Android platforms.",
      project: "Mobile E-commerce App"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "CTO",
      company: "InnovateLab",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      rating: 5,
      testimonial: "Working with Shahrob was a game-changer for our project. He built a scalable backend system using NestJS that handles thousands of concurrent users effortlessly. Highly recommended!",
      project: "SaaS Platform Backend"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Startup Founder",
      company: "HealthTech Pro",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      rating: 5,
      testimonial: "Shahrob transformed our vision into reality. The full-stack web application he developed helped us secure Series A funding. His code quality and project management skills are exceptional.",
      project: "Healthcare Management System"
    },
    {
      id: 4,
      name: "David Thompson",
      position: "Digital Marketing Director",
      company: "Growth Agency",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      rating: 5,
      testimonial: "The e-commerce platform Shahrob built for us increased our conversion rate by 40%. His understanding of user experience and technical implementation is remarkable.",
      project: "E-commerce Platform"
    },
    {
      id: 5,
      name: "Lisa Wang",
      position: "Operations Manager",
      company: "LogiFlow",
      image: "https://randomuser.me/api/portraits/women/5.jpg",
      rating: 5,
      testimonial: "Shahrob delivered our project on time and within budget. The real-time dashboard he created provides valuable insights for our business operations. Professional and reliable!",
      project: "Analytics Dashboard"
    },
    {
      id: 6,
      name: "James Wilson",
      position: "Tech Lead",
      company: "StartupXYZ",
      image: "https://randomuser.me/api/portraits/men/6.jpg",
      rating: 5,
      testimonial: "Outstanding work on our React application. Shahrob's expertise in modern development practices and clean code architecture made our project a huge success. Will definitely work with him again.",
      project: "React Web Application"
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

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <FaStar 
        key={i} 
        color={i < rating ? "#ffd700" : "#ccc"}
        size={16}
      />
    ));
  };

  return (
    <Container fluid className="testimonials-section">
      <Particle />
      <Container>
        <AnimatedSection>
          <Row>
            <Col>
              <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
                Client <strong className="purple">Testimonials</strong>
              </h1>
              <p style={{ color: "white", textAlign: "center", fontSize: "1.1em" }}>
                What my clients say about working with me
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
            {testimonials.map((testimonial, index) => (
              <Col md={6} lg={4} key={testimonial.id} className="testimonial-card-col">
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
                      
                      <div className="testimonial-content">
                        <p className="testimonial-text">
                          "{testimonial.testimonial}"
                        </p>
                      </div>

                      <div className="testimonial-rating">
                        {renderStars(testimonial.rating)}
                      </div>

                      <div className="testimonial-author">
                        <div className="author-info">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="author-avatar"
                          />
                          <div className="author-details">
                            <h5 className="author-name">{testimonial.name}</h5>
                            <p className="author-position">
                              {testimonial.position}
                            </p>
                            <p className="author-company">
                              {testimonial.company}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="project-tag">
                        <span className="project-label">Project: {testimonial.project}</span>
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

export default Testimonials;
