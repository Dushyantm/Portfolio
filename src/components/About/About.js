// src/components/About/About.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import AboutCard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import TestimonialCard from "./TestimonialCard"; // Import TestimonialCard

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        {/* Existing About Section */}
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I AM</strong>
            </h1>
            <AboutCard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          What People <strong className="purple">Say</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col md={4} className="project-card">
            <TestimonialCard
              name="Devesh Surve"
              designation="Data Scientist at Fidelity Investments"
              testimonial="Working with Dushyant was like coding with a chaotic genius. Their solutions often came out of nowhere, defying logic, documentation, and sometimes physics—but they worked, somehow. Between their 'creative debugging' (aka guessing) and 'innovative time management' (aka starting the night before), I’ve learned the value of patience and coffee. 10/10, would survive the chaos again!"
            />
          </Col>
          <Col md={4} className="project-card">
            <TestimonialCard
              name="Jane Smith"
              designation="Lead Engineer at InnovateX"
              testimonial="Working with Dushyant was a pleasure. His insights into AI and machine learning are exceptional."
            />
          </Col>
          <Col md={4} className="project-card">
            <TestimonialCard
              name="John Doe"
              designation="CEO of TechCorp"
              testimonial="Dushyant's expertise in data science significantly advanced our project's success. His dedication is unparalleled."
            />
          </Col>
        </Row>

        {/* Existing Professional Skillset Section */}
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
