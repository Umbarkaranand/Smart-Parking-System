import React, { useState, useEffect } from "react";
import { Navbar } from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import { ParkingRegistration } from "../Components/ParkingRegistration";

export const AdminstratorPanel = () => {
  const [parkingData, setParkingData] = useState([]);
  const [emailPresent, setEmailPresent] = useState(false);
  const navigate = useNavigate();

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
      } catch (error) {
        console.error("Error loading data:", error);
      }
    };

    loadData();
  }, []);

  const email = localStorage.getItem("email");

  useEffect(() => {
    if (parkingData.some((parking) => parking.email === email)) {
      setEmailPresent(true);
    } else {
      setEmailPresent(false);
    }
  }, [parkingData, email]);

  if (emailPresent) {
    navigate("/parkingslots");
    return null; // Render nothing if email is present
  }

  return (
    <div>
      <Navbar />
      <ParkingRegistration></ParkingRegistration>
      {/* Add your registration form component here */}
    </div>
  );
};
