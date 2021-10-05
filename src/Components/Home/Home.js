import React from "react";
import { Container } from "react-bootstrap";
import "./Home.css";
import image1 from "./hero-1.jpg";
import image2 from "./hero-sm-1.jpg";

const Home = () => {
  return (
    <div>
      <Container fluid className="home-container  d-flex align-items-center">
        <div className="d-flex container py-5">
          <div className="d-flex flex-column justify-content-center">
            <h1>
              <span className="fw-light">Access 2700+</span> <br />{" "}
              <span className="fw-bold">
                Online Tutorial From Top Instructors.
              </span>
            </h1>
            <h4 className="fw-light">
              Meet university,and cultural institutions, who'll share their
              experience.
            </h4>
            <button className="button-blue my-4 w-50 d-flex align-items-center justify-content-center">
              View courses <i class="fas fa-chevron-right ms-2"></i>
            </button>
          </div>
          <div className="text-center">
            <img src={image1} alt="" className="img-fluid w-50 rounded-2" />
            <img
              src={image2}
              alt=""
              className="img-fluid w-25 rounded-2 ms-4"
            />
          </div>
        </div>
      </Container>
      <Container className="py-5">
        <div>
          <h1 className="fw-bold">
            Find The Right <br /> Online Course For You
          </h1>
          <p className="text-muted">
            You don't have to struggle alone, you've got our assistance and
            help.
          </p>
        </div>
        <div className="text-center">
          <button className="button-blue">See All Courses</button>
        </div>
      </Container>
    </div>
  );
};

export default Home;
