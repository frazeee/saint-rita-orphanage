import React, { useState } from "react";
import "./Purpose.css";

import rightImage from "../../images/8.jpeg";

function Purpose() {
  return (
    <div className="py-3 pb-5 z-1" style={{ backgroundColor: "#FFF0EC" }}>
      <h2
        className="heading text-center mt-5 me-3"
        style={{ fontSize: "3.5em" }}
      >
        Our Purpose
      </h2>
      <div className="d-flex justify-content-center">
        <hr className="w-25 mb-4" />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12 mb-3">
            <div class="card shadow">
              <img src={rightImage} class="card-img-top" alt="..." />
              <div class="card-body px-3 text-center mb-3">
                <h2 class="card-title text-center heading fw-semibold">
                  Our Mission
                </h2>
                <p class="card-text">
                  Saint Rita Orphanage aims to be a secure and caring home,
                  where staff and administrators treat children like family. We
                  strive to help abandoned children grow in grace and wisdom,
                  both with God and others.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 sm-12 mb-3">
            <div class="card shadow">
              <img src={rightImage} class="card-img-top" alt="..." />
              <div class="card-body px-3 text-center mb-3">
                <h2 class="card-title text-center heading fw-semibold">
                  Our Vision
                </h2>
                <p class="card-text">
                  We aim for a loving, secure haven where each child thrives.
                  Individual care, spiritual growth, and collaboration with DSWD
                  pave the way for adoptive families. A well-rounded program
                  empowers their potential.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Purpose;
