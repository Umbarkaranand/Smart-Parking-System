import { React, useState } from "react";
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import { Link, useNavigate } from "react-router-dom";
import signinImage from "../assets/login.gif";

export const Resgistration = () => {
  let navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    name: "",
    password: "",
    email: "",
    phone: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        phone: credentials.phone,
      }),
    });

    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert("Enter valid credentials ");
    }

    if (json.success) {
      navigate("/signin");
    }
  };

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };
  return (
    <div>
      <Navbar></Navbar>
      <div
        className="d-flex justify-content-center align-items-center w-100 mb-4"
        style={{ height: "80vh" }}
      >
        <div className="col-lg-4">
          <img
            src={signinImage}
            className="img-fluid"
            alt="..."
            style={{ width: "50%" }}
          />
        </div>
        <form className="col-lg-4" onSubmit={handleSubmit}>
          <div className="mb-2">
            <label for="name" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="name"
              value={credentials.name}
              onChange={onChange}
            />
          </div>

          <div className="mb-2">
            <label for="phone" className="form-label">
              Mobile Number
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="phone"
              value={credentials.phone}
              onChange={onChange}
            />
          </div>

          <div className="mb-2">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              value={credentials.email}
              onChange={onChange}
            />
          </div>
          <div className="mb-1">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              value={credentials.password}
              onChange={onChange}
            />
          </div>
          <div id="" className="form-text mb-2">
            password length should be minimum 5 character.
          </div>

          <button type="submit" class="btn btn-outline-dark mb-2 form-control">
            Register
          </button>

          <Link className="text-primary " aria-current="page" to="/">
            <p>Already User</p>
          </Link>
        </form>
      </div>

      <Footer></Footer>
    </div>
  );
};
