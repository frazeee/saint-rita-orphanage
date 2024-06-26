import React, { useState } from "react";
import "./Programs.css";
import icon1 from "../../images/icons/image 157.png";

import rightImage from "../../images/3.jpeg";

const cardData = [
  { icon: icon1, title: "Placement of Children" },
  { icon: icon1, title: "Family Assistance" },
  { icon: icon1, title: "Informational Education & Value Formation" },
  { icon: icon1, title: "Physical and Mental Health" },
  { icon: icon1, title: "Sociocultural Development" },
  { icon: icon1, title: "Indoor & Outdoor Experiences" },
];

function Programs() {
  return (
    <div style={{ marginTop: "200px", backgroundColor: "#FFF0EC" }}>
      <div className="row p-5">
        <div className="col-lg-6 p-5">
          <h2 className="heading mb-5" style={{ fontSize: "3.5em" }}>
            Our Programs
          </h2>
          {cardData.map((card) => (
            <div key={card.title} className="card shadow mb-3 rounded-4">
              <div className="card-body card-animation d-flex align-items-center">
                <img src={card.icon} className="icon me-3" alt={card.title} />{" "}
                <h5 className="fw-normal">{card.title}</h5>
              </div>
            </div>
          ))}
        </div>
        <div className="col-lg-6">
          <div className="">
            <img src={rightImage} className="img-fluid mx-auto d-block" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Programs;
