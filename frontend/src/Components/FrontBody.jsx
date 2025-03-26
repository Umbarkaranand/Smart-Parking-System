import React from "react";
import parkingImage from "../assets/parking.jpg";
import { useNavigate } from "react-router-dom";

export const FrontBody = () => {

let navigate = useNavigate();
  return (
    <div>
      <div
        className="d-flex justify-content-center align-items-center w-100 flex-column"
        style={{ height: "80vh" }}
      >
        <div className="col-lg-5 col-sm-12 text-center ">
          <p className="fs-4 mb-4 text-secondary">
            <h2 className="">Smart Parking System,</h2> are not just a solution;
            they're a catalyst for change. They're about reimagining urban
            spaces, improving accessibility, and building communities that
            thrive.
          </p>

          <form class="d-flex w-100" role="search" onClick={() => navigate("/mainparking")} >
            <input
              class="form-control me-2 p-2"
              type="search"
              placeholder="Enter Location"
              aria-label="Search"
            />
            <button class="btn btn-outline-dark w-30" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
