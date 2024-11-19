// src/components/About/TestimonialCard.js
import React from "react";
import Card from "react-bootstrap/Card";

function TestimonialCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Subtitle className="mb-2" style={{color:'#cccccc'}}>
          {props.designation}
        </Card.Subtitle>
        <Card.Text style={{ textAlign: "justify" }}>
          "{props.testimonial}"
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default TestimonialCard;
