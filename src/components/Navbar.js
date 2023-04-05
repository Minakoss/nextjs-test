import React from "react";
import Link from "next/link";

function Navbar({ navbarTitle }) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="navbar-brand">{navbarTitle}</div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" href="/">
                Home
              </Link>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Catalogue
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" href="/filmtype">
                    Film Type
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/filmcolor">
                    Film color
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/filmBW">
                    Film B&W
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/super8">
                    Super 8
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/Gallery">
                    Gallery
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" href="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
