import React, { useState } from "react";
import "./Programs.css";
import icon1 from "../../images/icons/image 157.png";
import Background from "../../images/programsBackground.jpg";
import headerBanner from "../../images/4.jpeg";

const cardData = [
  {
    icon: icon1,
    title: "Placement of Children",
    description:
      "We provide safe and nurturing placements for children who can no longer live with their families.",
  },
  {
    icon: icon1,
    title: "Family Assistance",
    description:
      "We offer support programs to help families stay together whenever possible, promoting stability and well-being.",
  },
  {
    icon: icon1,
    title: "Informational Education & Value Formation",
    description:
      "Our programs equip children with knowledge and life skills, fostering positive values and responsible decision-making.",
  },
  {
    icon: icon1,
    title: "Physical and Mental Health",
    description:
      "We prioritize the physical and mental health of children in our care, ensuring access to healthcare and support services.",
  },
  {
    icon: icon1,
    title: "Sociocultural Development",
    description:
      "We create a nurturing environment that celebrates diversity and cultural understanding, promoting personal growth for all children.",
  },
  {
    icon: icon1,
    title: "Indoor & Outdoor Experiences",
    description:
      "We provide a variety of engaging activities and safe spaces for learning, recreation, and fostering a sense of community within the orphanage.",
  },
];

function Programs() {
  return (
    <div>
      <div className="container p-5 mb-5">
        <h1 className="heading text-center mb-2" style={{ fontSize: "3.5em" }}>
          Our Programs
        </h1>
        <div className="d-flex justify-content-center">
          <hr className="w-25 mb-5" />
        </div>
        {/* <div className="row mb-5">
          {cardData.map((card) => (
            <div className="col-lg-4 d-flex flex-column align-items-center p-3 mb-3 ">
              <div className="card-body d-flex w-100 p-3">
                <img
                  width={100}
                  height={100}
                  src={card.icon}
                  className="img-fluid mx-3 flex-grow-1"
                />
                <h6 className="">{card.title}</h6>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div> */}
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
            <div className="card text-dark card-has-bg card-style">
              <img className="card-img " src={headerBanner} />
              <div className="card-img-overlay d-flex flex-column">
                <div className="card-body">
                  <small className="card-meta mb-2">Saint Rita Orphanage</small>
                  <h4 className="card-title mt-0">
                    <p href="#" className="text-dark">
                      Placement of Children
                    </p>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
            <div className="card text-dark card-has-bg card-style">
              <img className="card-img " src={headerBanner} />
              <div className="card-img-overlay d-flex flex-column">
                <div className="card-body">
                  <small className="card-meta mb-2">Saint Rita Orphanage</small>
                  <h4 className="card-title mt-0">
                    <p href="#" className="text-dark">
                      Placement of Children
                    </p>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
            <div className="card text-dark card-has-bg card-style">
              <img className="card-img " src={headerBanner} />
              <div className="card-img-overlay d-flex flex-column">
                <div className="card-body">
                  <small className="card-meta mb-2">Saint Rita Orphanage</small>
                  <h4 className="card-title mt-0">
                    <p href="#" className="text-dark">
                      Placement of Children
                    </p>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
            <div className="card text-dark card-has-bg card-style">
              <img className="card-img " src={headerBanner} />
              <div className="card-img-overlay d-flex flex-column">
                <div className="card-body">
                  <small className="card-meta mb-2">Saint Rita Orphanage</small>
                  <h4 className="card-title mt-0">
                    <p href="#" className="text-dark">
                      Placement of Children
                    </p>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
            <div className="card text-dark card-has-bg card-style">
              <img className="card-img " src={headerBanner} />
              <div className="card-img-overlay d-flex flex-column">
                <div className="card-body">
                  <small className="card-meta mb-2">Saint Rita Orphanage</small>
                  <h4 className="card-title mt-0">
                    <p href="#" className="text-dark">
                      Placement of Children
                    </p>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
            <div className="card text-dark card-has-bg card-style">
              <img className="card-img " src={headerBanner} />
              <div className="card-img-overlay d-flex flex-column">
                <div className="card-body">
                  <small className="card-meta mb-2">Saint Rita Orphanage</small>
                  <h4 className="card-title mt-0">
                    <p href="#" className="text-dark">
                      Placement of Children
                    </p>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Programs;
