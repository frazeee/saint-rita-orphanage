const Footer = () => {
  return (
    <>
      <div class="container-fluid px-5" style={{ backgroundColor: "#AE4398" }}>
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-5  text-white">
          <p class="col-md-4 mb-0">© Saint Rita Orphanage</p>

          <a
            href="/"
            class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
          ></a>

          <ul class="nav col-md-4 justify-content-end">
            <li class="nav-item">
              <a href="#" class="nav-link px-2">
                Home
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
};

export default Footer;
