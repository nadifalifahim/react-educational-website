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
      <div className="d-flex justify-content-center my-5">
        <div className="w-75 d-flex px-5 mx-5">
          <img src={aboutImage} alt="" className="img-fluid w-50 " />
          <div className="ms-4">
            <h1 className="fw-bold">
              Achieve Your <br /> Goals With Educal
            </h1>
            <p className="text-muted">
              Access 2700+ online tutorial from top instructors. Meet
              university,and cultural institutions, who'll share their
              experience. Find the right online Course for you. Access 2700+
              online tutorial from top instructors. Meet university,and cultural
              institutions, who'll share their experience. <br /> <br /> Find
              the right online Course for you. Meet university,and cultural
              institutions, who'll share their experience. Find the right online
              Course for you. <br /> <br />
              We are all very different. We were born in different cities, at
              different times, we love different music, food, movies. But we
              have something that unites us all. It is our company. We are its
              heart. We are not just a team, we are a family.
              <br /> <br />
              Access 2700+ online tutorial from top instructors. Meet
              university,and cultural institutions, who'll share their
              experience. Find the right online Course for you.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
