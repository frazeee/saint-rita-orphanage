const Footer = () => {
  return (
    <>
      <div class="container-fluid px-5" style={{ backgroundColor: "#AE4398" }}>
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-2  text-white">
          <div class="col-md-4 d-flex flex-column my-3">
            <span>Have a question?</span>
            <span>
              <i class="bi bi-telephone-fill ms-3 me-2"></i> (+63) 905 545 8601
            </span>
            <span>
              <i class="bi bi-envelope-fill ms-3 me-2"></i>sro64hoc@yahoo.com.ph
            </span>
          </div>
          <div
            href="/"
            class="col-md-4 d-flex flex-column align-items-center justify-content-center my-2 mb-md-0 me-md-auto text-white "
          >
            <h3 className="" style={{ fontFamily: "Zen Antique Soft" }}>
              {" "}
              Saint Rita Orphanage
            </h3>
            <p className="text-center">
              Augustinian Recollection Sisters | Sucat, Parañaque
            </p>
          </div>

          <ul class="nav col-md-4 justify-content-end">
            <li class="nav-item">
              <a href="https://www.facebook.com/SaintRitaOrphanage" target="_blank" class="nav-link text-white px-2">
                <h2>
                  <i class="bi bi-facebook"></i>
                </h2>
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
};

export default Footer;
