import React, { useState } from "react";
import "./Purpose.css";

import rightImage from "../../images/8.jpeg";

function Purpose() {
  return (
    <>
      <h2
        className="heading text-center mt-5 me-3"
        style={{ fontSize: "3.5em" }}
      >
        Our Purpose
      </h2>
      <div className="d-flex justify-content-center">
        <hr className="w-25 mb-4" />
      </div>
      <div className="row">
        <div className="col-lg-6">
          <img src={rightImage} className="img-fluid" />
        </div>
        <div className="col-lg-6 d-flex align-items-center p-5">
          <div className="p-3">
            <h1 className="heading text-dark mb-3">Mission</h1>
            <hr className="w-25" />
            <p>
              Saint Rita Orphanage aims to be a secure and caring home, where
              staff and administrators treat children like family. We strive to
              help abandoned children grow in grace and wisdom, both with God
              and others.
            </p>
          </div>
        </div>
      </div>
      <div className="row" style={{backgroundColor: "#e4e2fc"}}>
        <div className="col-lg-6 d-flex align-items-center p-5">
          <div className="p-3">
            <h1 className="heading text-dark mb-3">Vision</h1>
            <hr className="w-25 hr-alt" style={{}}/>
            <p>
              To achieve our vision, we promise to:
              <ul>
                {" "}
                <li>Care for each child patiently and lovingly. </li>
                <li> Understand and meet the needs of every child. </li>
                <li>Treat each child with trust and fairness.</li>
                <li>
                  {" "}
                  Create a peaceful atmosphere for prayer and trust in Divine
                  Providence, with devotion to the Blessed Virgin Mary.
                </li>{" "}
                <li>
                  Provide a nurturing family environment, with genuine parental
                  care for all children.{" "}
                </li>
                <li>
                  Work with the Department of Social Welfare and Development
                  (DSWD) to find adoptive parents.
                </li>{" "}
                <li>
                  Develop a well-rounded program for the children's growth and
                  development.
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div className="col-lg-6">
          <img src={rightImage} className="img-fluid" />
        </div>
      </div>
    </>
  );
}

export default Purpose;
