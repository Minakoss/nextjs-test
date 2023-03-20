import React from "react";

function contact() {
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
                    <a class="dropdown-item" href="/filmAM">
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
        <h1>Under Construction</h1>
        <div className="form">
          <form>
            <div>
              <label for="">Username : </label>
              <input
                type="text"
                placeholder="Username/email"
                aria-label="Username"
              />
            </div>
            <div>
              <label for="">Password : </label>
              <input
                type="password"
                placeholder="Password"
                aria-label="Password"
              />
            </div>
            <div className="position_button">
              <div className="button">
                <button type="submit" class="btn btn-light">
                  Register
                </button>
              </div>

              <div className="button">
                <button type="submit" class="btn btn-light">
                  Signin
                </button>
              </div>
            </div>
          </form>
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

export default contact;
