import React, { useState } from "react";
import "./Programs.css";
import {
  educationValue,
  familyAssistance,
  indoorActivities,
  physicalHealth,
  socioDevelopment,
  childrenPlacement,
} from "../../images/program-cards/exports.js";

const cardData = [
  { img: childrenPlacement, title: "Placement of Children" },
  { img: familyAssistance, title: "Family Assistance" },
  { img: educationValue, title: "Informational Education & Value Formation" },
  { img: physicalHealth, title: "Physical and Mental Health" },
  { img: socioDevelopment, title: "Sociocultural Development" },
  { img: indoorActivities, title: "Indoor & Outdoor Experiences" },
];

function Programs() {
  return (
    <div className="bg-cloud">
      <div className="container p-5 mb-5">
        <h1 className="heading text-center mb-2" style={{ fontSize: "3.5em" }}>
          Our Programs
        </h1>
        <div className="d-flex justify-content-center">
          <hr className="w-25 mb-5" />
        </div>

        <div className="row">
          {cardData.map((card) => (
            <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
              <div className="card text-dark card-has-bg card-style">
                <img className="card-img img-fluid" src={card.img} />
                <div className="card-img-overlay d-flex flex-column">
                  <div className="card-body">
                    <small className="card-meta mb-2">
                      Saint Rita Orphanage
                    </small>
                    <h4 className="card-title mt-0">
                      <p href="#" className="text-dark">
                        {card.title}
                      </p>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Programs;
