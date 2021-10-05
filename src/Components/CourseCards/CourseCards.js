import React from "react";
import { Card, Col } from "react-bootstrap";

const CourseCards = (props) => {
  const { courseName, instructor, price, image, description, rating } =
    props.serviceInfo;
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>{courseName}</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CourseCards;
