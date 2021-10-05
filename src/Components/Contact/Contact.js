import React from "react";
import { Container } from "react-bootstrap";

const Contact = () => {
  return (
    <Container className="w-50">
      <div className="text-center py-5">
        <h1 className="fw-bold">Contact</h1>
      </div>
      <div>
        <h1 className="fw-bold">Get in touch</h1>
        <p className="text-muted">
          Have a question or just want to say hi? We'd love to hear from you.
        </p>
        <div className="d-flex mb-4">
          <input
            type="text"
            placeholder="Your Name"
            className="me-3 w-100"
          ></input>
          <input
            type="text"
            placeholder="Your Email"
            className=" w-100"
          ></input>
        </div>
        <div>
          <input
            type="text"
            placeholder="Subject"
            className="w-100 mb-4"
          ></input>
        </div>
        <div>
          <textarea
            type="text"
            placeholder="Subject"
            className="w-100 mb-4"
          ></textarea>
        </div>
      </div>
      <button className="button-blue mb-5">Send Message</button>
    </Container>
  );
};

export default Contact;
