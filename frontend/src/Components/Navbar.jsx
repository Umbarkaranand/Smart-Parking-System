import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logOutImage from "../assets/logout.png";

export const Navbar = () => {
  let navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("email");
    navigate("/");
  };
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary shadow p-3 bg-body-tertiary rounded">
        <div class="container-fluid">
          <Link class="navbar-brand fs-2" to="" style={{ marginLeft: "10%" }}>
            Parking System
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active fs-5" aria-current="page" to="/">
                  Home
                </Link>
              </li>
            </ul>

            {!localStorage.getItem("authToken") ? (
              <div className="d-flex navbar-nav  mb-2 mb-lg-0">
                <div class="nav-item me-3 fs-5">
                  <Link
                    class="nav-link active"
                    aria-current="page"
                    to="/signin"
                  >
                    SignIn
                  </Link>
                </div>

                <div class="nav-item me-3 fs-5">
                  <Link
                    class="nav-link active"
                    aria-current="page"
                    to="/registration"
                  >
                    Register
                  </Link>
                </div>

                <div class="nav-item me-3 fs-5">
                  <Link class="nav-link active" aria-current="page" to="/about">
                    AboutUs
                  </Link>
                </div>
              </div>
            ) : (
              <button 
                style={{ border: "none", background: "white" }}
                onClick={handleLogOut}
              >
                <img
                  src={logOutImage}
                  className="img-fluid"
                  style={{ width: "25px" }}
                ></img>
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};
