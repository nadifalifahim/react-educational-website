import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import CourseCards from "../CourseCards/CourseCards";

const Services = () => {
  useEffect(() => {
    fetch("./Services.js")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <Container>
      <div>
        <h1 className="text-center py-5 fw-bolder">Services</h1>
        <div>
          <Row xs={1} md={3} className="g-4">
            {Array.from({ length: 4 }).map((_, idx) => (
              <CourseCards></CourseCards>
            ))}
          </Row>
        </div>
      </div>
    </Container>
  );
};

export default Services;
