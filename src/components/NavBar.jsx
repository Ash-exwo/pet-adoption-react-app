import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg shadow sticky-top"
        style={{
          background: "linear-gradient(to right, #C5B3D3, #FBEFEF)",
        }}
      >
        <div className="container">

          <a
            className="navbar-brand d-flex align-items-center"
            href="/"
          >
            <span
              className="fw-bold fs-3"
              style={{ color: "#FFFFFF" }}
            >
              Pet Haven
            </span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ borderColor: "#FFFFFF" }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav ms-auto">

              <Link
                className="nav-link fw-semibold mx-2"
                to="/"
                style={{ color: "#FFFFFF" }}
              >
                Add Pet
              </Link>

              <Link
                className="nav-link fw-semibold mx-2"
                to="/search"
                style={{ color: "#FFFFFF" }}
              >
                Search Pet
              </Link>

              <Link
                className="nav-link fw-semibold mx-2"
                to="/delete"
                style={{ color: "#FFFFFF" }}
              >
                Delete Pet
              </Link>

              <Link
                className="nav-link fw-semibold mx-2"
                to="/viewall"
                style={{ color: "#FFFFFF" }}
              >
                View Pets
              </Link>

            </div>
          </div>

        </div>
      </nav>
    </div>
  )
}

export default NavBar