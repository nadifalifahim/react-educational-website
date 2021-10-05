import React from "react";
import "./PageNotFound.css";
import errorimage from "./error.png";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="d-flex align-items-center page-not-found-container">
      <div className="container text-center">
        <img src={errorimage} alt="" />
        <h1 className="fw-bolder mt-5">Page Not Found!</h1>
        <h5 className="fw-normal">Please try searching for some other page</h5>
        <Link to="/home">
          <button className="button-blue mt-4">Back to home</button>
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
