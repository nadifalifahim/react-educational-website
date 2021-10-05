import React from "react";
import { Container } from "react-bootstrap";
import "./Footer.css";

const Footer = (props) => {
  const { logo } = props;
  return (
    <Container fluid className="footer-container">
      <Container className="d-flex justify-content-between py-5">
        <div className="text-white w-25 me-5">
          <h3 className="">{logo} educal</h3>
          <p className="footer-text-muted">
            Great lesson ideas and lesson plans for ESL teachers! Educators can
            customize lesson plans to best.
          </p>
          <div className="my-5 d-flex">
            <i className="fs-2 fab fa-facebook me-4"></i>
            <i class="fs-2 fab fa-instagram me-4"></i>
            <i class="fs-2 fab fa-twitter me-4"></i>
          </div>
        </div>
        <div className="text-white mx-5 footer-info">
          <h4 className="text-white">Company</h4>
          <ul className="text-muted list-group">
            <li>About</li>
            <li>Courses</li>
            <li>Events</li>
            <li>Instructor</li>
            <li>Career</li>
            <li>Become a teacher</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="text-white mx-5 footer-info">
          <h4 className="text-white">Platform</h4>
          <ul className="text-muted list-group">
            <li>Browse Library</li>
            <li>Library</li>
            <li>Partners</li>
            <li>News {`&`} Blogs</li>
            <li>FAQs</li>
            <li>Tutorials</li>
          </ul>
        </div>
        <div className="text-white mx-5 footer-info">
          <h4 className="text-white">Subscribe</h4>
          <div>
            <input type="text" placeholder="Your email address"></input>
            <button className="button-blue">
              <i class="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default Footer;
