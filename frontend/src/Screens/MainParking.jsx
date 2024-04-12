import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ParkCar from "../assets/ParkCar.webp";
import FreeCar from "../assets/FreeCar.webp";
import { Card } from "../Components/Card";
import { ViewParkingSlots } from "../Components/ViewParkingSlots";

export const MainParking = () => {
  const [parkingData, setParkingData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredParkingData, setFilteredParkingData] = useState([]);
  const [selectedParking, setSelectedParking] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    const filteredData = parkingData.filter(
      (parking) =>
        parking.parkingname.toLowerCase().includes(searchTerm.toLowerCase()) ||
        parking.address.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredParkingData(filteredData);
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        let response = await fetch("http://localhost:5000/api/displaydata", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });

        response = await response.json();
        setParkingData(response);
        setFilteredParkingData(response);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
        console.error("Error loading data:", error);
      }
    };

    loadData();
  }, []);

  const handleCardClick = (parking) => {
    setSelectedParking(parking);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  if (selectedParking) {
    return <ViewParkingSlots parkingData={selectedParking} />;
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm p-3 mb-3 bg-body-tertiary rounded">
        <div className="container-fluid">
          <Link
            className="navbar-brand fs-2"
            to=""
            style={{ marginLeft: "10%" }}
          >
            Parking System
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active fs-5"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="d-flex">
        <div className="col-3 border m-4 " style={{ height: "85vh" }}>
          <div className="text-center m-3 text-secondary">
            <h5 className="fs-4">Help</h5>
            <hr></hr>
          </div>

          <div className="m-3 text-center">
            <img src={FreeCar} className="img-fluid  "></img>
            <p
              className="text-secondary mt-3 fw-bold"
              style={{ fontSize: "2vmin" }}
            >
              Count of Free Parking
            </p>
          </div>
          <div className="m-3 text-center">
            <img src={ParkCar} className="img-fluid"></img>
            <p
              className=" text-danger mt-3 fw-bold "
              style={{ fontSize: "2vmin" }}
            >
              Count of Occupied Parking
            </p>
          </div>
        </div>

        <div className="col-7">
          <div>
            <form
              className="d-flex w-70 mt-4 "
              role="search"
              onSubmit={handleSearch}
            >
              <input
                className="form-control me-2 p-2"
                type="search"
                placeholder="Enter Location"
                aria-label="Search"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="btn btn-outline-dark w-30" type="submit">
                Search
              </button>
            </form>
          </div>

          {filteredParkingData.map((parking, index) => (
            <Card
              key={index}
              imgSrc={parking.imgsrc}
              parkingName={parking.parkingname}
              address={parking.address}
              parkingNo={parking.parkingno}
              other={parking.other}
              onClick={() => handleCardClick(parking)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
