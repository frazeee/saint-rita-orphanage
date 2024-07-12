import React, { useEffect } from "react";
import "./Hero.css";
import headerBanner from "../../images/carousel.png";
import headerBanner2 from "../../images/carousel1.jpeg";
import headerBanner3 from "../../images/carousel2.png";
import headerBanner4 from "../../images/carousel3.png";

function Hero() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    // <div className="row justify-content-center" style={{ backgroundColor: "#f6f3eb" }}>
    //   <div className="col-md-12 col-lg-6 my-5">
    //     <div
    //       className="container mt-5 p-5"
    //     >
    //       <span className="bdg">Home of Children since 1964</span>
    //       <h1 className="mt-3 heading" style={{ fontSize: "4.75rem" }}>
    //         Welcome to Saint Rita Orphanage!
    //       </h1>
    //       <div className="mt-5">
    //         <p className="fs-5 mb-4">
    //           “Children are a gift from the Lord; they are a reward from him.”
    //         </p>
    //         <p className="fs-5 mb-5">Psalm 127:3</p>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="col-md-12 col-lg-6">
    //     <img src={heroImage} className="img-fluid w-100 h-100" style={{objectFit: "cover"}} />
    //   </div>
    // </div>
    <>
      <div>
        <nav
          id="navbar"
          className="navbar navbar-expand-lg navbar-dark bg-transparent fixed-top px-4"
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Saint Rita Orphanage
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a
                    className="nav-link active mx-3"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-3" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-3" href="#">
                    Programs
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div
        id="carouselExampleAutoplaying"
        class="carousel slide carousel-fade "
        data-bs-ride="carousel"
      >
        <div class="carousel-inner h-50">
        <div class="position-absolute top-50 start-50 translate-middle z-3"><h1 className="text-white text-center">The Sanctuary of Love, Hope, and Blessings</h1></div>
          <div class="carousel-item active">
            <img src={headerBanner} class="d-block w-100" alt="..." />
            <div class="carousel-mask"></div>
          </div>
          <div class="carousel-item">
            <img src={headerBanner2} class="d-block w-100" alt="..." />
            <div class="carousel-mask"></div>
          </div>
          <div class="carousel-item">
            <img src={headerBanner3} class="d-block w-100" alt="..." />
            <div class="carousel-mask"></div>
          </div>
          <div class="carousel-item">
            <img src={headerBanner4} class="d-block w-100" alt="..." />
            <div class="carousel-mask"></div>
          </div>
        </div>
        <button
          class="carousel-control-prev z-3"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next z-3"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
        <div class="carousel-mask"></div>
      </div>
    </>
  );
}

export default Hero;
