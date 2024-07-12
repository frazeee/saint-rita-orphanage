import "./test.css";
import image from "../images/1.jpeg";

function Test() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark  bg-dark sticky-top ">
        <div className="container-fluid px-4">
          <div className="navbar-brand d-flex align-items-center">
            <a className="navy-link" to="/">
              <img width="50" height="50" alt="" className=" me-4" />
            </a>
          </div>

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

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav ms-auto">
              <>
                <li className="nav-item mx-3">
                  <a className="nav-link text-white" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item mx-3">
                  <a className="nav-link text-white" href="#">
                    About Us
                  </a>
                </li>
                <li className="nav-item mx-3">
                  <a className="nav-link text-white" href="#">
                    Login
                  </a>
                </li>
                <li className="nav-item ms-3">
                  <a className="nav-link text-white" href="#">
                    Register
                  </a>
                </li>
              </>
            </ul>
          </div>
        </div>
      </nav>

      <div
        class="p-5 text-center shadow"
        style={{
          backgroundImage: `url('https://mdbcdn.b-cdn.net/img/new/slides/041.webp')`,
          height: "400px",
        }}
      >
        <div class="d-flex justify-content-center align-items-center h-100">
          <div class="container-fluid">
            <div class="px-4 py-5 my-5 text-white text-center">
              <h1 class="display-5 fw-bold">Lifestream</h1>
              <div class="col-lg-6 mx-auto">
                <p class="lead mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas vel accumsan nulla. Nulla pharetra ligula id tellus
                  sodales tincidunt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container mt-5">
        <div class="row">
          <div class="col-lg-6 ">
            <img
              src="https://www.lifeblood.com.au/sites/default/files/inline-images/lifeblood-gifts-2024-blood-L1-feature-530x398_0.jpg "
              class="img-fluid w-100 p-5"
            />
          </div>
          <div class="col-lg-6 p-5">
            <h3>Lorem Ipsum</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              vel accumsan nulla. Nulla pharetra ligula id tellus sodales
              tincidunt. Pellentesque eleifend mattis sapien, sed viverra nunc.
              In fringilla non quam vel lacinia. Phasellus vitae tortor egestas
              dolor viverra accumsan. Sed eu luctus tellus. Donec pellentesque
              neque vitae ligula blandit, sit amet ultricies ex vulputate.
              Aenean ac placerat augue, vel faucibus est. Donec vel dictum
              velit.
            </p>
          </div>
        </div>
      </div>

      <div class="container mt-5">
        <div class="row">
          <div class="col-lg-6 p-5">
            <h3>Lorem Ipsum</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              vel accumsan nulla. Nulla pharetra ligula id tellus sodales
              tincidunt. Pellentesque eleifend mattis sapien, sed viverra nunc.
              In fringilla non quam vel lacinia. Phasellus vitae tortor egestas
              dolor viverra accumsan. Sed eu luctus tellus. Donec pellentesque
              neque vitae ligula blandit, sit amet ultricies ex vulputate.
              Aenean ac placerat augue, vel faucibus est. Donec vel dictum
              velit.
            </p>
          </div>
          <div class="col-lg-6 ">
            <img
              src="https://www.lifeblood.com.au/sites/default/files/inline-images/lifeblood-gifts-2024-blood-L1-feature-530x398_0.jpg "
              class="img-fluid w-100 p-5"
            />
          </div>
        </div>
      </div>

        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 px-3 my-4 bg-dark text-white">
          <p class="col-md-4 mb-0">© 2024 Lifestream</p>

          <a
            href="/"
            class="col-md-4 d-flex align-items-center justify-content-center me-md-auto text-decoration-none"
          ></a>

          <ul class="nav col-md-4 justify-content-end">
            <li class="nav-item mx-3">
              <a href="#" class="nav-link px-2 text-white">
                Home
              </a>
            </li>
            <li class="nav-item mx-3">
              <a href="#" class="nav-link px-2 text-white">
                About Us
              </a>
            </li>
          </ul>
        </footer>
    </>
  );
}

export default Test;
