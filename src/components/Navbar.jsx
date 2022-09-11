import React from "react";
import Logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navigationcontainer-fluid navbar-style py-3">
      <div className="row">
        <img src={Logo} className="icon" alt="Christ University" />

        <div className="col-md-10 col-12 ml-auto">
          <nav className="navbar navbar-expand-lg navbar-light">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="/">
                    Home
                    <span className="sr-only"></span>
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Clubs
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <NavLink to-="/dsa">
                      <a class="dropdown-item" href="#">
                        DSA
                      </a>
                    </NavLink>
                    <NavLink to="/sc">
                      <a class="dropdown-item" href="#">
                        Science Club
                      </a>
                    </NavLink>
                  </div>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Upcoming Events
                  </a>

                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#darpan">
                      Darpan
                    </a>
                    <a class="dropdown-item" href="#techgenx">
                      TechGen-X
                    </a>
                    <a class="dropdown-item" href="#shahmat">
                      Shah-Mat
                    </a>
                  </div>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Faculty List
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">
                      School Of Sciences
                    </a>
                    <a
                      class="dropdown-item"
                      href="https://ncr.christuniversity.in/faculty-list"
                    >
                      Christ University
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
