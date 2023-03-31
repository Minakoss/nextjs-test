import React from "react";

function filmcolor() {
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
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div className="imagebg">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-6 col-xl-4 align-self-center animate__animated animate__bounce animate__slideInLeft ">
              <div className="box3">
                <h2>Reversal Film</h2>
                Reversal film can be projected for viewing, printed on reversal
                paper in a darkroom, or scanned into a computer for editing and
                printing. Reversal film requires more precise exposure than
                negative film because it has less exposure latitude; errors in
                exposure or color balance may be difficult or impossible to
                correct in printing.
              </div>
            </div>
            <div class="col-12 col-md-6 col-xl-4 align-self-center animate__animated animate__bounce animate__slideInDown animate__delay-1s ">
              <div className="box2">
                <h2>Negative Film</h2>
                Negative film produces an image that is the opposite of the
                original scene in color and density. It can be printed on paper
                in a darkroom to make a positive or scanned into a computer for
                editing and printing. It is usually easier to work with negative
                film if the final medium is a print. Color negative film has a
                considerable tolerance for under- and overexposure , and, when
                scanned, is superior to reversal film for photographs of very
                contrast-laden scenes.
              </div>
            </div>
            <div class="col-12 col-md-12 col-xl-4 align-self-center animate__animated animate__bounce animate__slideInRight">
              <div className="box1">
                <h2>Professional Film</h2>
                Negative or reversal "professional" film also is designed and
                manufactured for professionals who demand accurate color
                balance. A film's age and its ISO rating and color balance
                change during storage. Professional film is shipped with its
                qualities near their peak, and is refrigerated by camera stores
                to ensure that it is in the best condition. Professionals
                usually buy large quantities of film, preferably all from the
                same manufacturing batch, and they shoot test rolls to determine
                its precise ISO and color balance. Professionals keep film
                refrigerated until it is used, and develop it as soon as
                possible. The useful life of unopened film can be extended by
                refrigeration or freezing. However, once film is opened , it is
                better kept at room temperature and should be exposed and
                developed promptly.
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="footer-content">
          <h6> &copy;Minakos</h6>

          <a href="mailto:hege@example.com">hege@example.com</a>
        </div>
      </footer>
    </>
  );
}

export default filmcolor;
