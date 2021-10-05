import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const CourseCards = (props) => {
  const { courseName, instructor, price, image, rating, reviews, lessons } =
    props.serviceInfo;
  return (
    <Col>
      <Card className="rounded shadow">
        <div className="card-image-container">
          <Card.Img variant="top" src={image} className="card-image" />
        </div>
        <Card.Body className="mx-3">
          <div className="d-flex justify-content-between my-3 text-muted ">
            <div>
              <i className="fas fa-book"></i>
              <span className="ms-2 ">{lessons} lessons</span>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faStar}
                style={{ color: "orange" }}
              ></FontAwesomeIcon>
              <span>
                {" "}
                {rating} ({reviews})
              </span>
            </div>
          </div>
          <Card.Title className="fs-4">{courseName}</Card.Title>
          <Card.Text className="text-muted">Instructor: {instructor}</Card.Text>
          <hr />
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="fw-bold primary-color">$ {price.toFixed(2)}</h5>
            <Link to="/services" className="text-decoration-none">
              <h6>
                Get details <i className="fas fa-chevron-right"></i>
              </h6>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CourseCards;
