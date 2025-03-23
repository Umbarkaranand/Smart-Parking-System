import React, { useState, useEffect } from "react";
import { Navbar } from "./Navbar";
import styled from "styled-components";

export const ParkingSlots = () => {
  const [parkingData, setParkingData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const API_URL = import.meta.env.VITE_BACKEND_URL;
        let response = await fetch(`${API_URL}/api/displaydata`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        response = await response.json();
        setParkingData(response);

        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
        console.error("Error loading data:", error);
      }
    };

    loadData();
  }, []);

  const email = localStorage.getItem("email");

  const filteredParkingData = parkingData.filter(
    (parking) => parking.email === email
  );

  console.log(filteredParkingData);
  const handleBoxClick = async (index) => {
    try {
      const confirmed = window.confirm(
        `Are you sure you want to update parking slot ${index + 1}?`
      );

      if (confirmed) {
        const updatedData = [...filteredParkingData];
        updatedData[0].parkingno[index] =
          updatedData[0].parkingno[index] === 1 ? 0 : 1;
        setParkingData(updatedData);

        const email = localStorage.getItem("email");
        const newData = {
          email,
          parkingIndex: index,
          newValue: updatedData[0].parkingno[index],
        };

        await fetch("http://localhost:5000/api/updateData", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newData),
        });
      }
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

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
              <HelpBox className="bg-success" style={{}}></HelpBox>
              <p
                className="text-success mt-3 fw-bold fs-4"
                style={{ fontSize: "2vmin" }}
              >
                Free Parking
              </p>
            </div>

            <div className="">
              <HelpBox className="bg-danger" style={{}}></HelpBox>
              <p
                className="text-danger mt-3 fw-bold fs-4"
                style={{ fontSize: "2vmin" }}
              >
                Occupied Parking
              </p>
            </div>
          </div>

          <div className="col-sm-12 col-lg-7 mt-4 border">
            <div className="">
              <div className="mb-5 mt-5 text-center">
                <h1>
                  {filteredParkingData.length > 0
                    ? filteredParkingData[0].parkingname
                    : ""}
                </h1>
              </div>

              <hr className="mb-4"></hr>

              <div className="d-flex flex-wrap justify-content-between align-items-center w-100">
                {filteredParkingData.length > 0 &&
                  filteredParkingData[0].parkingno.map((value, index) => (
                    <Box
                      key={index}
                      className={`m-1 d-flex justify-content-center align-items-center p-1 ${
                        value === 1 ? "bg-success" : "bg-danger"
                      }`}
                      style={{}}
                      onClick={() => handleBoxClick(index)}
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
