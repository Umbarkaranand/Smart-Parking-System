import { React, useState } from "react";
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import { Link, useNavigate } from "react-router-dom";
import signinImage from "../assets/login.gif";

export const Singin = () => {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    password: "",
    email: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const API_URL = import.meta.env.VITE_BACKEND_URL;
    let response = await fetch(`${API_URL}/api/signin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });

    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert("Enter valid credentials ");
    }

    if (json.success) {
      localStorage.setItem("authToken", json.authToken);
      localStorage.setItem("email", credentials.email);
      console.log(localStorage.getItem("authToken"));
      navigate("/adminstratorpanel");
    }
  };

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <div>
        <Navbar></Navbar>
        <div
          className="d-flex justify-content-center align-items-center w-100"
          style={{ height: "80vh" }}
        >
          <div className="col-4">
            <img
              src={signinImage}
              class="img-fluid"
              alt="..."
              style={{ width: "50%" }}
            />
          </div>
          <form className="col-4" onSubmit={handleSubmit}>
            <div className="mb-3">
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
            <div className="mb-3">
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
            <div id="" className="form-text mb-3">
              password length should be minimum 5 character.
            </div>

            <button
              type="submit"
              class="btn btn-outline-dark mb-3 form-control"
            >
              Sign In
            </button>

            <Link
              className="text-primary "
              aria-current="page"
              to="/registration"
            >
              <p>create new account</p>
            </Link>
          </form>
        </div>

        <Footer></Footer>
      </div>
    </div>
  );
};
