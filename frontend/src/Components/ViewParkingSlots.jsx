import React from "react";
import { Navbar } from "./Navbar";
import styled from "styled-components";

export const ViewParkingSlots = ({ parkingData }) => {
  console.log("Selected Parking:", parkingData);

  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-lg-3 d-none d-sm-block d-md-block border m-4 text-center"
            style={{ height: "85vh" }}
          >
            <div className=" m-3 text-secondary">
              <h5 className="fs-4">Help</h5>
              <hr />
            </div>

            {/* First Help Box */}
            <div className="mt-5">
              <HelpBox className="bg-success"></HelpBox>
              <p
                className="text-success mt-3 fw-bold fs-4"
                style={{ fontSize: "2vmin" }}
              >
                Free Parking
              </p>
            </div>

            <div className="">
              <HelpBox className="bg-danger"></HelpBox>
              <p
                className="text-danger mt-3 fw-bold fs-4"
                style={{ fontSize: "2vmin" }}
              >
                Occupied Parking
              </p>
            </div>
          </div>

          <div className="col-sm-12 col-lg-7 mt-4 border">
            <div className="row text-center me-auto mb-5">
              <div className="col-3">
                <img
                  src={parkingData.imgsrc}
                  alt=""
                  className="img-fluid"
                  style={{ minWidth: "40px", minHeight: "140px" }}
                ></img>
              </div>
              <div className=" col-9 text-center">
                <h1>{parkingData.parkingname}</h1>
              </div>
            </div>

            <hr></hr>
            <div className="d-flex flex-wrap justify-content-between align-items-center w-100">
              {parkingData.parkingno.map((value, index) => (
                <Box
                  key={index}
                  className={`m-1 d-flex justify-content-center align-items-center p-1 ${
                    value === 1 ? "bg-success" : "bg-danger"
                  }`}
                >
                  <p
                    className="text-light text-center fw-bold fs-3"
                    style={{ fontSize: "2vmin", margin: 0 }}
                  >
                    P {index + 1}
                  </p>
                </Box>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Box = styled.div`
  width: 100px;
  height: 200px;
  border-radius: 15px;
  border: 2px solid black;
`;

const HelpBox = styled.div`
  width: 150px;
  height: 250px;
  margin: auto;
  border: 2px solid black;
  border-radius: 15px;
`;
