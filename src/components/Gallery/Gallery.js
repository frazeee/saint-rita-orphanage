import Marquee from "react-fast-marquee";
import "./Gallery.css";

import Image1 from "../../images/1.jpeg";
import Image2 from "../../images/2.jpeg";

import Image4 from "../../images/4.jpeg";
import Image5 from "../../images/5.jpeg";
import Image6 from "../../images/6.jpeg";

const Gallery = () => {
  return (
    <>
      <div className="container mt-5">
        <h1
          className="heading text-center"
          style={{ fontSize: "3.5em" }}
        >
          Our Gallery
        </h1>
      </div>
      <div className="w-100">
        <Marquee pauseOnHover style={{ height: "650px" }}>
          <div>
            <img
              src={Image1}
              className="rounded mx-3 img-fluid full-horizontal"
            />
          </div>
          <div className="d-flex flex-column mx-3">
            <div>
              <img
                src={Image2}
                className="two-stack rounded my-3"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div>
              <img
                src={Image5}
                className="two-stack rounded my-3 "
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="h-100">
            <img
              src={Image4}
              className="rounded h-100 mx-3"
              style={{ objectFit: "cover", maxHeight: "560px" }}
            />
          </div> 
        </Marquee>
      </div>
    </>
  );
};

export default Gallery;
