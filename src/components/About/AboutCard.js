import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple">Muhammad Shahrob Abbas </span>
            from <span className="purple"> Sahiwal, Pakistan.</span>
            <br />
            I am a Senior Full Stack Developer at Meta Logix Tech with 6+ years
            of experience building web, mobile, SaaS and AI-powered products.
            <br />
            I hold a Bachelor's degree in Computer Science from the University
            of Sahiwal (2017 - 2021).
            <br />
            I am also the founder of Khurshid Dairy, where I built and run the
            online store end to end.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            {/* <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li> */}
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Shahrob.</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
