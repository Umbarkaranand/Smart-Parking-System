import { React, useState } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Link, useNavigate } from "react-router-dom";

export const ParkingRegistration = () => {
  let navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    name: "",
    parkingname: "",
    email: "",
    address: "",
    imgsrc: "",
    parkingno: "",
    other: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/createparking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: credentials.name,
        parkingname: credentials.parkingname,
        email: credentials.email,
        imgsrc: credentials.imgsrc,
        address: credentials.address, // Corrected typo here
        parkingno: credentials.parkingno,
        other: credentials.other,
      }),
    });

    const json = await response.json();

    if (!json.success) {
      alert("Enter valid Data ");
    }

    if (json.success) {
      navigate("/parkingslots");
    }
  };

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <div className="mb-5">
        <form
          className="col-sm-8 mx-auto border p-4 mt-5"
          onSubmit={handleSubmit}
        >
          <div className="mb-4 text-center">
            <h2 className="mb-3 mt-4">Parking Registration Form</h2>
            <p className="text-secondary">
              Please, fill all the information carefully!
            </p>
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label fw-semibold fs-5">
              {" "}
              {/* Corrected typo here */}
              Name
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={credentials.name}
              onChange={onChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="name" className="form-label fw-semibold fs-5">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={credentials.email}
              onChange={onChange}
            />
          </div>

          <div className="mb-3">
            <label
              htmlFor="parkingname"
              className="form-label fw-semibold fs-5"
            >
              Parking Name
            </label>
            <input
              type="text"
              className="form-control"
              name="parkingname"
              value={credentials.parkingname}
              onChange={onChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="imgsrc" className="form-label fw-semibold fs-5">
              URL of Image
            </label>
            <input
              type="text"
              className="form-control"
              name="imgsrc"
              value={credentials.imgsrc}
              onChange={onChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="address" className="form-label fw-semibold fs-5">
              Parking Address
            </label>
            <input
              type="text"
              className="form-control"
              name="address"
              value={credentials.address}
              onChange={onChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="parkingno" className="form-label fw-semibold fs-5">
              Total Number Parkings
            </label>
            <input
              type="number"
              className="form-control"
              name="parkingno"
              value={credentials.parkingno}
              onChange={onChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="other" className="form-label fw-semibold fs-5">
              Other
            </label>
            <input
              type="text"
              className="form-control"
              name="other"
              value={credentials.other}
              onChange={onChange}
            />
          </div>

          <button
            type="submit"
            className="btn btn-outline-dark mb-5 fw-semibold fs-5 form-control"
          >
            Register Parking
          </button>
        </form>
      </div>

      <Footer></Footer>
    </div>
  );
};
