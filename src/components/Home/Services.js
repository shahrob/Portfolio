import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import Card from "../UI/Card";
import Section from "../UI/Section";
import { reveal } from "../UI/reveal";
import { services } from "../../data/profile";
import "./Services.css";

function Services() {
  return (
    <Section
      id="services"
      index="05"
      eyebrow="Services"
      title={
        <>
          How I can <em>help</em>.
        </>
      }
      intro="Web, mobile, backend and AI development, from architecture to deployment."
    >
      <div className="services-grid">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <Card key={service.title} className="tile service-card" {...reveal(index * 0.05)}>
              <div className="service-head">
                <span className="service-icon">
                  <Icon aria-hidden="true" />
                </span>
                <span className="service-index mono">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
              <ul className="checklist">
                {service.features.map((feature) => (
                  <li key={feature}>
                    <FiCheck aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          );
        })}
      </div>

      <motion.div className="cta-band" {...reveal()}>
        <div>
          <p className="cta-title">Have a project in mind?</p>
          <p className="cta-text">
            Have a SaaS idea or need a web, mobile or AI solution? Let's discuss
            your requirements.
          </p>
        </div>
        <Link to="/#contact" className="btn btn-primary">
          Start your project <FiArrowRight aria-hidden="true" />
        </Link>
      </motion.div>
    </Section>
  );
}

export default Services;
