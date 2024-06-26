import React, { useState } from "react";

function Navbar() {
  return (
    <div className="">
      <nav
        class=" pt-3 navbar navbar-expand-lg"
        style={{ backgroundColor: "#f6f3eb" }}
      >
        <div class="container-fluid">
          <a class="navbar-brand ms-5" href="#">
            Logo
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
              <a class="nav-link" href="#">
                About Us
              </a>
              <a class="nav-link" href="#">
                Our Mission & Vision
              </a>
              <a class="nav-link" href="#">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
