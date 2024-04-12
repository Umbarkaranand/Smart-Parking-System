import React from "react";
import { Link } from "react-router-dom";
import ParkCar from "../assets/ParkCar.webp";
import FreeCar from "../assets/FreeCar.webp";

export const Card = ({
  imgSrc,
  parkingName,
  parkingNo,
  address,
  other,
  onClick,
}) => {
  // If parkingNo is an object, convert it to an array
  const parkingNoArray = Object.values(parkingNo);
  let freeCarNo = parkingNoArray.filter((num) => num === 1).length;
  let occupiedCarNo = parkingNoArray.filter((num) => num === 0).length;

  return (
    <div onClick={onClick}>
      <div>
        <div class="col-12">
          <div class="row g-0 border rounded p-0 mt-3 ">
            <div class="col-3">
              <img
                src={imgSrc}
                alt=""
                className="img-fluid"
                style={{ minWidth: "40px", minHeight: "140px" }}
              ></img>
            </div>

            <div class="col p-3 pb-0 d-flex flex-column position-static">
              <h3 class="" style={{ fontSize: "3vmin" }}>
                {parkingName}
              </h3>
              <div
                className="mb-1 text-body-secondary"
                style={{ fontSize: "2vmin" }}
              >
                {other} , {address}
              </div>
              <div className="">
                <div className="d-flex">
                  <img
                    src={FreeCar}
                    className="img-fluid"
                    style={{
                      width: "30px",
                      height: "30px",
                      minWidth: "15px",
                      minHeight: "15px",
                    }}
                  ></img>

                  <h4 className="d-inline ms-2 text-success">{freeCarNo}</h4>
                </div>
                <div>
                  <img
                    src={ParkCar}
                    className="img-fluid mt-1"
                    style={{
                      width: "30px",
                      height: "30px",
                      minWidth: "15px",
                      minHeight: "15px",
                    }}
                  ></img>
                  <h4 className="d-inline ms-2 text-danger">{occupiedCarNo}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
