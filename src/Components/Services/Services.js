import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import CourseCards from "../CourseCards/CourseCards";

// Services Component
const Services = () => {
  // Service state
  const [services, setServices] = useState([]);

  // Calling data from database
  useEffect(() => {
    fetch("./Data/services.JSON")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <Container>
      <div>
        <h1 className="text-center pt-5 pb-3 fw-bolder">Services</h1>
        <div className="my-5">
          <Row xs={1} md={3} className="g-5">
            {services.map((serviceInfo) => (
              <CourseCards
                key={serviceInfo.courseID}
                serviceInfo={serviceInfo}
              ></CourseCards>
            ))}
          </Row>
        </div>
      </div>
    </Container>
  );
};

export default Services;
