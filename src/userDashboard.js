import "./test.css";
import image from "../images/1.jpeg";

function Test() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Features
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">
                  Disabled
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div class="container-fluid mt-3 px-5 py-3">
        <div>
          <h2>Welcome back, Nigger!</h2>
        </div>
        <div
          class="card bg-secondary py-2 px-3 mb-3"
          style={{ maxHeight: "50px" }}
        >
          <p class="card-title fs-5 text-white-50">User Dashboard</p>
        </div>

        <div class="row">
          <div class="col-lg-6 col-sm-12 mb-3">
            <div class="card bg-danger border-0 shadow">
              <div class="card-title d-flex justify-content-between text-white p-4">
                <h3>Donate Blood</h3>
              </div>
              <div class="row align-items-center mb-2 d-flex">
                <div class="col-lg-8 col-md-6 col-sm-4"></div>
                <div class="col-lg-4 col-md-6 col-sm-8 text-center text-white p-1">
                  <button
                    class="btn btn-link text-white"
                    data-bs-toggle="modal"
                    data-bs-target="#editDonorModal"
                  >
                    Apply for donation <i class="bi bi-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-sm-12 mb-3">
            <div class="card bg-success border-0 shadow">
              <div class="card-title d-flex justify-content-between text-white p-4">
                <h3>My Donations</h3>
              </div>
              <div class="row align-items-center mb-2 d-flex">
                <div class="col-lg-8 col-md-6 col-sm-4"></div>
                <div class="col-lg-4 col-md-6 col-sm-8 text-center text-white p-1">
                  <button
                    href="#"
                    class="btn btn-link text-white"
                    data-bs-toggle="modal"
                    data-bs-target="#addAnnouncementModal"
                  >
                    View my donations <i class="bi bi-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-sm-12 mb-3">
            <div class="card bg-primary border-0 shadow">
              <div class="card-title text-white p-4">
                <h3>Recipients</h3>
              </div>
              <div class="row align-items-center mb-2 d-flex">
                <div class="col-lg-7 col-md-6 col-sm-4"></div>
                <div class="col-lg-5 col-md-6 col-sm-8 text-center text-white p-1">
                  <button
                    href="#"
                    class="btn btn-link text-white"
                    data-bs-toggle="modal"
                    data-bs-target="#addAnnouncementModal"
                  >
                    Search Blood Recipients <i class="bi bi-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr class="border border-secondary-subtle border-3 opacity-75 w-100"></hr>
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-4 mb-3">
              <div class="card shadow p-3">
                <div class="card-title">
                  <h4 class="text-center">Chart Title</h4>
                  <div class="card-body">
                    <p> palagay nalang ng chart</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-8 mb-3">
              <div class="card shadow p-5">
                <div class="card-title">
                  <h4>Announcements</h4>
                  <hr class="border border-secondary-subtle border-3 opacity-75 w-100"></hr>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item mb-3">
                      <div class="d-flex justify-content-between w-100 mb-2">
                        <h5>Announcement Title </h5>
                        <h6>
                          <span class="badge text-bg-primary">
                            July 16, 2024
                          </span>
                        </h6>
                      </div>
                      <div class="container">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Aenean molestie neque in enim fringilla, eget
                          dignissim ipsum euismod. Nam consectetur, enim eget
                          hendrerit scelerisque, libero mauris convallis mi,
                          eget feugiat sapien libero vel metus.
                        </p>
                        <p class="fw-light">Organizer Name</p>
                      </div>
                    </li>
                    <li class="list-group-item mb-3">
                      <div class="d-flex justify-content-between w-100 mb-2">
                        <h5>Announcement Title </h5>
                        <h6>
                          <span class="badge text-bg-primary">
                            July 16, 2024
                          </span>
                        </h6>
                      </div>
                      <div class="container">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Aenean molestie neque in enim fringilla, eget
                          dignissim ipsum euismod. Nam consectetur, enim eget
                          hendrerit scelerisque, libero mauris convallis mi,
                          eget feugiat sapien libero vel metus.
                        </p>
                        <p class="fw-light">Organizer Name</p>
                      </div>
                    </li>
                    <li class="list-group-item mb-3">
                      <div class="d-flex justify-content-between w-100 mb-2">
                        <h5>Announcement Title </h5>
                        <h6>
                          <span class="badge text-bg-primary">
                            July 16, 2024
                          </span>
                        </h6>
                      </div>
                      <div class="container">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Aenean molestie neque in enim fringilla, eget
                          dignissim ipsum euismod. Nam consectetur, enim eget
                          hendrerit scelerisque, libero mauris convallis mi,
                          eget feugiat sapien libero vel metus.
                        </p>
                        <p class="fw-light">Organizer Name</p>
                      </div>
                    </li>
                    <li class="list-group-item mb-3">
                      <div class="d-flex justify-content-between w-100 mb-2">
                        <h5>Announcement Title </h5>
                        <h6>
                          <span class="badge text-bg-primary">
                            July 16, 2024
                          </span>
                        </h6>
                      </div>
                      <div class="container">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Aenean molestie neque in enim fringilla, eget
                          dignissim ipsum euismod. Nam consectetur, enim eget
                          hendrerit scelerisque, libero mauris convallis mi,
                          eget feugiat sapien libero vel metus.
                        </p>
                        <p class="fw-light">Organizer Name</p>
                      </div>
                    </li>
                    
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*Edit Donors Modal */}
        <div
          class="modal fade"
          id="editDonorModal"
          tabindex="-1"
          aria-labelledby="editDonorModal"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5">Edit Donor Details</h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="mb-3">
                    <label for="fullName" class="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="age"
                      aria-describedby="emailHelp"
                    />
                    <div id="emailHelp" class="form-text"></div>
                  </div>
                  <div class="mb-3">
                    <label for="age" class="form-label">
                      Age
                    </label>
                    <input
                      type="number"
                      class="form-control"
                      id="age"
                      min="1"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="age" class="form-label">
                      Birthdate
                    </label>
                    <input type="date" class="form-control" id="birthdate" />
                  </div>
                  <div class="mb-3">
                    <label for="bloodType" class="form-label">
                      Blood Type
                    </label>
                    <select class="form-select">
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="O">O</option>
                      <option value="AB">AB</option>
                    </select>
                  </div>
                  <div class="mb-3">
                    <label for="bloodType" class="form-label">
                      Gender
                    </label>
                    <select class="form-select">
                      <option value="A">M</option>
                      <option value="B">F</option>
                    </select>
                  </div>
                  <div class="mb-3">
                    <label for="collectionDate" class="form-label">
                      Collection Date
                    </label>
                    <input
                      type="date"
                      class="form-control"
                      id="collectionDate"
                    />
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-danger"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-success">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Add/Edit Recipients Modal */}
        {/* Add separate instance/component for both add and edit functions 
            CHANGE MODAL TITLE IF ADDING OR EDITING 
        */}
        <div
          class="modal fade"
          id="editRecipientsModal"
          tabindex="-1"
          aria-labelledby="editRecipientsModal"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5">Edit Recipient Details</h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="mb-3">
                    <label for="fullName" class="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="age"
                      aria-describedby="emailHelp"
                    />
                    <div id="emailHelp" class="form-text"></div>
                  </div>
                  <div class="mb-3">
                    <label for="age" class="form-label">
                      Age
                    </label>
                    <input
                      type="number"
                      class="form-control"
                      id="age"
                      min="1"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="age" class="form-label">
                      Birthdate
                    </label>
                    <input type="date" class="form-control" id="birthdate" />
                  </div>
                  <div class="mb-3">
                    <label for="bloodType" class="form-label">
                      Blood Type
                    </label>
                    <select class="form-select">
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="O">O</option>
                      <option value="AB">AB</option>
                    </select>
                  </div>
                  <div class="mb-3">
                    <label for="gender" class="form-label">
                      Gender
                    </label>
                    <select class="form-select">
                      <option value="A">M</option>
                      <option value="B">F</option>
                    </select>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-danger"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-success">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Delete Confirmation Modal */}
        {/* Add separate instance/component per table for deleting records*/}
        <div
          class="modal fade"
          id="deleteModal"
          tabindex="-1"
          aria-labelledby="deleteModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="deleteModalLabel">
                  Delete Record?
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                Are you sure you want to delete the record?
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-danger">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Add Announcement Modal */}
        <div
          class="modal fade"
          id="addAnnouncementModal"
          tabindex="-1"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="addAnnouncementLabel">
                  Admin Announcement
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="row">
                    <div class="col-lg-6 col-md-12">
                      <div class="mb-3">
                        <label for="fullName" class="form-label">
                          Title
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="announcementTitle"
                        />
                        <div id="emailHelp" class="form-text"></div>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                      <div class="mb-3">
                        <label for="age" class="form-label">
                          Organizer
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="announcementOrganizer"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="mb-3">
                    <label for="age" class="form-label">
                      Date Event
                    </label>
                    <input
                      type="date"
                      class="form-control"
                      id="announcementDate"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="announcementText" class="form-label">
                      Announcement Details
                    </label>
                    <textarea
                      class="form-control"
                      id="announcementText"
                      rows="3"
                    ></textarea>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-danger"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-success">
                  Add Announcement
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Test;
