import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { motion } from "framer-motion";
import Particle from "../Particle";
import AnimatedSection from "../AnimatedSection";
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaLinkedin, 
  FaGithub, 
  FaTwitter,
  FaPaperPlane
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    projectType: ""
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertVariant, setAlertVariant] = useState("success");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setAlertMessage("Please fill in all required fields.");
      setAlertVariant("danger");
      setShowAlert(true);
      return;
    }

    // Simulate form submission
    console.log("Form submitted:", formData);
    
    setAlertMessage("Thank you for your message! I'll get back to you soon.");
    setAlertVariant("success");
    setShowAlert(true);
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      projectType: ""
    });

    // Hide alert after 5 seconds
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email",
      value: "shahrobk@gmail.com",
      link: "mailto:shahrobk@gmail.com"
    },
    {
      icon: FaPhone,
      title: "Phone",
      value: "+92 306 8635828",
      link: "tel:+923068635828"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      value: "Sahiwal, Pakistan",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: FaLinkedin,
      title: "LinkedIn",
      url: "https://linkedin.com/in/shahrob-abbas",
      color: "#0077b5"
    },
    {
      icon: FaGithub,
      title: "GitHub",
      url: "https://github.com/shahrob",
      color: "#333"
    },
    {
      icon: FaTwitter,
      title: "Twitter",
      url: "https://twitter.com/shahrob_abbas",
      color: "#1da1f2"
    }
  ];

  const projectTypes = [
    "Web Application",
    "Mobile App (React Native)",
    "Backend API",
    "Full Stack Solution",
    "UI/UX Design",
    "Technical Consultation",
    "Other"
  ];

  return (
    <Container fluid className="contact-section">
      <Particle />
      <Container>
        <AnimatedSection>
          <Row>
            <Col>
              <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
                Get In <strong className="purple">Touch</strong>
              </h1>
              <p style={{ color: "white", textAlign: "center", fontSize: "1.1em" }}>
                Ready to start your next project? Let's discuss how I can help bring your ideas to life.
              </p>
            </Col>
          </Row>
        </AnimatedSection>

        <Row>
          {/* Contact Information */}
          <Col md={4}>
            <AnimatedSection delay={0.2}>
              <div className="contact-info">
                <h3 className="purple" style={{ marginBottom: "30px" }}>Contact Information</h3>
                
                {contactInfo.map((info, index) => (
                  <motion.div 
                    key={index}
                    className="contact-info-item"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="contact-icon">
                      <info.icon size={20} color="#c770f0" />
                    </div>
                    <div className="contact-details">
                      <h6>{info.title}</h6>
                      {info.link ? (
                        <a href={info.link} className="contact-link">
                          {info.value}
                        </a>
                      ) : (
                        <p>{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}

                <div className="social-links-contact">
                  <h4 className="purple" style={{ marginTop: "40px", marginBottom: "20px" }}>
                    Follow Me
                  </h4>
                  <div className="social-icons-contact">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noreferrer"
                        className="social-icon-contact"
                        whileHover={{ 
                          scale: 1.2,
                          color: social.color,
                          transition: { duration: 0.3 }
                        }}
                        title={social.title}
                      >
                        <social.icon size={24} />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </Col>

          {/* Contact Form */}
          <Col md={8}>
            <AnimatedSection delay={0.4}>
              <div className="contact-form">
                <h3 className="purple" style={{ marginBottom: "30px" }}>Send Me a Message</h3>
                
                {showAlert && (
                  <Alert variant={alertVariant} dismissible onClose={() => setShowAlert(false)}>
                    {alertMessage}
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Name *</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                          className="contact-input"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email *</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          required
                          className="contact-input"
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="Project discussion"
                          className="contact-input"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Project Type</Form.Label>
                        <Form.Select
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleInputChange}
                          className="contact-input"
                        >
                          <option value="">Select project type</option>
                          {projectTypes.map((type, index) => (
                            <option key={index} value={type}>{type}</option>
                          ))}
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label>Message *</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project..."
                      required
                      className="contact-input"
                    />
                  </Form.Group>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      variant="primary" 
                      type="submit" 
                      size="lg"
                      className="contact-submit-btn"
                    >
                      <FaPaperPlane style={{ marginRight: "10px" }} />
                      Send Message
                    </Button>
                  </motion.div>
                </Form>
              </div>
            </AnimatedSection>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
