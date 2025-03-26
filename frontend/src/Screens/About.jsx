import React from "react";
import { Navbar } from "../Components/Navbar";
import carImage from "../assets/car.gif";
import { Footer } from "../Components/Footer";
import "../App.css";

const About = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div
        className="d-flex justify-content-center align-items-center w-100 flex-column"
        style={{ height: "80vh" }}
      >
        <div className="mb-5 transitive-opacity">
          <img src={carImage} className="img-fluid" alt="..." />
        </div>
        <div className="col-lg-5 col-sm-12 text-center fs-5 text-secondary">
          Our <h4 className="d-inline">Smart Parking System</h4> is administered
          by an administrator and accessible to users through a web application
          from any location. This system allows users to remotely check parking
          availability in real-time. It enhances convenience by eliminating the
          need for physical presence at parking facilities and provides users
          with up-to-date information to make informed decisions. Additionally,
          the system likely features a user-friendly interface for easy
          navigation and accessibility. Overall, it offers a convenient and
          efficient solution for managing parking spaces effectively.
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default About;
