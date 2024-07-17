import "./ContactUs.css";

const ContactUs = () => {
  return (
    <>
      <div className="container-fluid bg-image vh-100 mt-5 shadow">
        <div className="d-flex h-100 flex-column align-items-center justify-content-center">
          <div className="card p-3 w-75">
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6"></div>
                <div className="col-lg-6">
                  <h2 className="text-center mb-3">
                    Schedule a visit to Saint Rita Orphanage!
                  </h2>
                  <div className="d-flex align-items-center">
                    {" "}
                    <div className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="35"
                        height="35"
                        fill="currentColor"
                        class="bi bi-geo-alt-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                      </svg>
                    </div>
                    <h5 className="mt-1 ms-3">Location</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
