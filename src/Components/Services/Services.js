import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import CourseCards from "../CourseCards/CourseCards";

const Services = () => {
  const [services, setServices] = useState();
  useEffect(() => {
    fetch("./Data/services.JSON")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <Container>
      <div>
        <h1 className="text-center py-5 fw-bolder">Services</h1>
        <div>
          <Row xs={1} md={3} className="g-4">
            {services.map((_, idx) => (
              <CourseCards></CourseCards>
            ))}
          </Row>
        </div>
      </div>
    </Container>
  );
};

export default Services;
