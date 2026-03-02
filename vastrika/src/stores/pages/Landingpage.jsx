import React from "react";
import Navbar from "../components/Navbar";
import Middlebanner from "../components/Middlebanner/Middlebanner";
import "./Landingpage.css";
import Footer from "../components/Footer/Footer";
const Landingpage = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <Middlebanner />
      <Footer/>
    </div>
  );
};

export default Landingpage;
