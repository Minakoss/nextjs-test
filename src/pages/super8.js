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
                    <a class="dropdown-item" href="/filmBW">
                      Film B&W
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/super8">
                      Super 8
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/Gallery">
                      Gallery
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
            <div class="col-12 col-md-6 col-xl-4 align-self-start animate__animated animate__bounce animate__slideInLeft">
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
                Super 35 which is generally compatible with standard 35 mm
                equipment, the film stock used for Super 8 is not compatible
                with standard 8 mm film cameras. There are several varieties of
                the film system used for shooting, but the final film in each
                case has the same dimensions. The most popular system by far was
                the Kodak system.
              </div>
            </div>
            <div class="col-12 col-md-6 col-xl-4 align-self-center animate__animated animate__bounce animate__slideInDown animate__delay-1s">
              <div className="box2">
                <h2>Single-8 system</h2>
                An alternative format which was released in 1965 as a different
                option to the Kodak Super 8 format. Single-8 cartridges, without
                a press plate, are of a different design from a Super 8
                cartridge, resembling a cassette-style design as opposed to
                Super 8's coaxial cartridge design. Therefore, Single-8 film
                cartridges can only be used in Single-8 cameras. However, the
                film loaded in a Single-8 cartridge has exactly the same
                dimensions as Super 8, and can be viewed in any Super 8
                projector after processing. Although never as popular as Super
                8, the format existed in parallel.
              </div>
            </div>
            <div class="col-12 col-md-12 col-xl-4 align-self-end animate__animated animate__bounce animate__slideInRight ">
              <div className="box3">
                <h2>Double Super 8</h2>
                Double Super 8 film is a 16 mm wide film but has Super 8 size
                sprockets. Double Super 8 for amateurs In amateur DS8 cameras,
                the film is used in the same way as standard 8 mm film in that
                the film is run through the camera twice, exposing one side on
                each pass. During processing, the film is split down the middle,
                and the two pieces spliced together to produce a single strip
                for projection in a Super 8 projector. The advantages of this
                system are the possibility of higher frame rates and rewinding
                film for double exposures or crossfades, which were very
                difficult or impossible with the super 8 film cartridges but
                possible with cameras using film spools.
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
