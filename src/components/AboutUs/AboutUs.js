import React, { useState } from "react";
import Clouds from "../../images/Group 1671.png";
import "./Section2.css";

function AboutUs() {
  return (
    <section className="spacer">
      <div className="h-100">
        <div className="img-container z-3">
          <img src={Clouds} className="img-fluid " />
        </div>
        <div className="row justify-content-center ">
          <div className="col-sm-10 col-md-10 col-lg-8 z-3 text-spacer">
            <div className="text-center mb-3">
              <h3 className="" style={{ color: "#2EC2F1" }}>
                Our Story
              </h3>
              <h1 className="heading mb-3" style={{ fontSize: "7.5vh" }}>
                Saint Rita Orphanage
              </h1>
              <p>
                A nurturing haven for underprivileged children, dedicated to
                fostering their holistic growth, instilling values of
                faithfulness, and nurturing their sense of responsibility as
                valuable contributors to both the Church and society.
              </p>
            </div>
            <div className="card shadow rounded mb-5">
              <div className="card-body text-center py-4 px-3">
                <p className="mb-4">
                  Founded in 1965 by the late Mother Carmen Alba, A.R., our
                  organization is devoted to protecting souls, valuing life, and
                  offering a temporary home where innocent children can grow and
                  flourish physically and spiritually through loving care.
                </p>
                <p>
                  {" "}
                  Saint Rita Orphanage is accredited by the Department of Social
                  Welfare and Development (DSWD) and registered with the
                  Securities and Exchange Commission (SEC), relying solely on
                  donations from the public and corporations for support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
