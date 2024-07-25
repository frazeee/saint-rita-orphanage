import "./ContactUs.css";
import mapIcon from "../../images/icons/contact-us/map-icon.png";
import envelopeIcon from "../../images/icons/contact-us/envelope-icon.png";
import phoneIcon from "../../images/icons/contact-us/phone-icon.png";
import facebookIcon from "../../images/icons/contact-us/facebook-icon.png";

const ContactUs = () => {
  return (
    <section className="shadow">
      <div className="container-fluid bg-image py-5 shadow">
        <div className="d-flex h-100 flex-column align-items-center justify-content-center my-5">
          <div className="card w-75 shadow-lg">
            <div className="card-body">
              <div className="row h-100">
                <div className="col-md-12 col-lg-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3863.5474289050785!2d121.03284747524955!3d14.453225786015855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397cfcb644c27d5%3A0x5832a14b901d0498!2sSaint%20Rita%20Orphanage!5e0!3m2!1sen!2sph!4v1721624034237!5m2!1sen!2sph"
                    className="w-100 h-100 img-fluid"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="col-lg-6">
                  <h1
                    className="text-center heading my-3"
                    style={{ fontSize: "3em" }}
                  >
                    Schedule a visit!
                  </h1>
                  <div className="row">
                    <div className="col-md-6 col-lg-6 p-3">
                      <div className="d-flex flex-column justify-content-center align-items-center shadow h-100 p-3 hover-animation">
                        <img
                          src={mapIcon}
                          className="img-fluid mb-3"
                          style={{ maxWidth: "50px" }}
                        />
                        <h5 className="contact-title text-center">ADDRESS:</h5>
                        <p className="text-center">
                          Dr. A. Santos Avenue, Saint Rita Village, Parañaque
                          City, 1714, Metro Manila, Philippines
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6 p-3">
                      <div className="d-flex flex-column justify-content-center align-items-center shadow h-100 p-3 hover-animation">
                        <img
                          src={envelopeIcon}
                          className="img-fluid mb-3"
                          style={{ maxWidth: "50px" }}
                        />
                        <h5 className="contact-title text-center">EMAIL:</h5>
                        <a href="mailto:sro64hoc@yahoo.com.ph" className="text-center">sro64hoc@yahoo.com.ph</a>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6 p-3">
                      <div className="d-flex flex-column justify-content-center align-items-center shadow h-100 p-3 hover-animation">
                        <img
                          src={phoneIcon}
                          className="img-fluid mb-3"
                          style={{ maxWidth: "50px" }}
                        />
                        <h5 className="contact-title text-center">MOBILE:</h5>
                        <span className="text-center">725 47 891</span>
                        <span className="text-center">(+63) 905 545 8601</span>
                        <p className="text-center">(+63) 908 312 2530</p>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6 p-3">
                      <div className="d-flex flex-column justify-content-center align-items-center shadow h-100 p-3 hover-animation">
                        <img
                          src={facebookIcon}
                          className="img-fluid mb-3"
                          style={{ maxWidth: "50px" }}
                        />
                        <h5 className="contact-title text-center">FACEBOOK:</h5>
                        <a href="https://www.facebook.com/SaintRitaOrphanage" className="text-center">Saint Rita Orphanage</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
