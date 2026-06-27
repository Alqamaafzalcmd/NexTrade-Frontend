import { React } from 'react';
import "./Navbar.css"
import {Link} from "react-router-dom"

function Navbar() {
    return (
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary border-bottom "
        style={{ backgroundColor: "#fff", height: "75px" }}
      >
        <div className="container p-2 ">
          <Link className="navbar-brand" to="/">
            <img
            className='mt-1'
              src="/media/logo.png"
              alt="logo"
              style={{
                width: "180px",
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </Link>
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

          <div
            className="collapse navbar-collapse  justify-content-end"
            id="navbarSupportedContent"
          >
            <form className="d-flex align-item-center mb-4" role="search">
              <ul
                className="navbar-nav me-4 mb-2 mt-3 mb-lg-0 "
                style={{ backgroundColor: "#f8f5f5", width: "50%" }}
              >
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/signup"
                  >
                    Signup
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/login"
                  >
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    to="/Product"
                    aria-disabled="true"
                  >
                    Product
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    to="/pricing"
                    aria-disabled="true"
                  >
                    Pricing
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    to="/support"
                    aria-disabled="true"
                  >
                    Support
                  </Link>
                </li>
                {/* <li className="nav-item" style={{ marginTop: "30px" }}>
                  <i className="nav-link fa-solid fa-bars"></i>
                </li> */}
              </ul>
            </form>
          </div>
        </div>
      </nav>
    );
}

export default Navbar;