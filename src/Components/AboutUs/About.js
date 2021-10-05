import React from "react";
import { Container } from "react-bootstrap";
import aboutImage from "./about.jpg";
import aboutBannerImage from "./about-banner.jpg";

const About = () => {
  return (
    <Container>
      <div>
        <h1 className="text-center my-5 fw-bold">About</h1>
      </div>
      <div className="d-flex w-50">
        <img src={aboutImage} alt="" className="img-fluid w-25" />
        <div className="ms-4">
          <h1 className="fw-bold">
            Achieve Your <br /> Goals With Educal
          </h1>
          <p className="text-muted">
            Lost the plot bobby such a fibber bleeding bits and bobs don't get
            shirty with me bugger all mate chinwag super pukka william barney,
            horse play buggered.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default About;
