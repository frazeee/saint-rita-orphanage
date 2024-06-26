import React, { useState } from "react";
import "./Hero.css";

import heroImage from "../../images/1.jpeg";

function Hero() {
  return (
    <div className="row justify-content-center" style={{ backgroundColor: "#f6f3eb" }}>
      <div className="col-md-12 col-lg-6 my-5">
        <div
          className="container mt-5 p-5"
        >
          <span className="bdg">Home of Children since 1964</span>
          <h1 className="mt-3 heading" style={{ fontSize: "4.75rem" }}>
            Welcome to Saint Rita Orphanage!
          </h1>
          <div className="mt-5">
            <p className="fs-5 mb-4">
              “Children are a gift from the Lord; they are a reward from him.”
            </p>
            <p className="fs-5 mb-5">Psalm 127:3</p>
          </div>
        </div>
      </div>
      <div className="col-md-12 col-lg-6">
        <img src={heroImage} className="img-fluid w-100 h-100" style={{objectFit: "cover"}} />
      </div>
    </div>
  );
}

export default Hero;
