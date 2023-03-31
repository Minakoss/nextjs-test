import React from "react";

function filmBW() {
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
            <div class="col-12 col-md-6 col-xl-4 align-self-start animate__animated animate__bounce animate__slideInLeft">
              <div className="box1">
                <h2>hello</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
            <div class="col-12 col-md-6 col-xl-4 align-self-center animate__animated animate__bounce animate__slideInUp animate__delay-1s">
              <div className="box2">
                <h2>hello</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
            <div class="col-12 col-md-12 col-xl-4 align-self-end animate__animated animate__bounce animate__slideInRight ">
              <div className="box3">
                <h2>hello</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
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

export default filmBW;
