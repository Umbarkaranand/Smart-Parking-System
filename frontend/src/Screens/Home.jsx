import React from "react";
import { FrontBody } from "../Components/FrontBody";
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <FrontBody />
      <Footer></Footer>
    </div>
  );
};

export default Home;
