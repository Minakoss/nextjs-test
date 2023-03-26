import React from "react";

function super8() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <div class="navbar-brand">Analog Life</div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link " aria-current="page" href="/">
                  Home
                </a>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Catalogue
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="/filmtype">
                      Film Type
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/filmcolor">
                      Film color
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/filmAM">
                      Film A/M
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/portrait">
                      Super 8
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="/contact">
                      Contact
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Αναζήτηση"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Αναζήτηση
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div className="imagebg">
        <div class="container">
          <div class="row">
            <div class="col align-self-start">
              <div className="box1">
                <h2>Super 8 Film</h2>
                Super 8 mm film is a motion-picture film format released in 1965
                by Eastman Kodak as an improvement over the older "Double" or
                "Regular" 8 mm home movie format. Super 8 spool with film -
                detail "Insert film here" The film is nominally 8 mm wide, the
                same as older formatted 8 mm film, but the dimensions of the
                rectangular perforations along one edge are smaller, which
                allows for a greater exposed area. The Super 8 standard also
                allocates the border opposite the perforations for an oxide
                stripe upon which sound can be magnetically recorded. Unlike
                Super 35, the film stock used for Super 8 is not compatible with
                standard 8 mm film cameras. There are several varieties of the
                film system used for shooting, but the final film in each case
                has the same dimensions. The most popular system by far was the
                Kodak system.
              </div>
            </div>
            <div class="col align-self-center">
              <div className="box2">
                <h2>35mm Film</h2>
                The most popular type of film. Also known as 135. These films
                are the ones that I showed you above. They are small and easy to
                load. Generally, you will have 24 to 36 photos in a roll.
                Actually, if you can use your film wisely, you can have 38–39
                photos from a 36 roll, but let’s not focus on the tricks for
                now. I love 35mm because you can find them everywhere and find a
                lab to develop them easily. Also developing them at home is
                easier. They are much cheaper than the following sizes because
                you can have more photos in a roll.
              </div>
            </div>
            <div class="col align-self-end">
              <div className="box3">
                <h2>120mm Film</h2>
                The second most popular film, also known as the medium format.
                These films are for larger cameras, so our little point and
                shoots cannot work with them. Lomography’s Diana F Plus is one
                of the popular new medium format cameras and very
                budget-friendly. Of course, there are much more expensive and
                professional medium format cameras like Mamiya 645. As far as I
                can tell, professionals prefer medium format better. The only
                sad thing about the medium format is it can be challenging to
                find a lab to develop them.
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="footer-content">
          <h6> &copy;Minakos</h6>

          <a href="mailto:hege@example.com">hege@example.com</a>
          <div>
            <a href="#" class="fa fa-facebook"></a>
            <a href="#" class="fa fa-twitter"></a>
            <a href="#" class="fa fa-instagram"></a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default super8;
