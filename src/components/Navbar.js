import React from "react";
import Link from "next/link";

function Navbar() {
  return (
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
              <Link class="nav-link " aria-current="page" href="/">
                Home
              </Link>
            </li>

            <li class="nav-item dropdown">
              <Link
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Catalogue
              </Link>
              <ul class="dropdown-menu">
                <li>
                  <Link class="dropdown-item" href="/filmtype">
                    Film Type
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" href="/filmcolor">
                    Film color
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" href="/filmBW">
                    Film B&W
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" href="/super8">
                    Super 8
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" href="/Gallery">
                    Gallery
                  </Link>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <Link class="dropdown-item" href="/contact">
                    Contact
                  </Link>
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
  );
}

export default Navbar;
