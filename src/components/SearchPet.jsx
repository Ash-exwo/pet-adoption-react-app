import React from 'react'
import NavBar from './NavBar'

const SearchPet = () => {
  return (
    <div
      style={{
        background: "linear-gradient(to right, #FDF2F8, #EEF2FF)",
        minHeight: "100vh",
      }}

    >
        <NavBar/>
      <div className="container py-5">
        <div className="row justify-content-center">

          <div className="col-12 col-md-8 col-lg-6">

            <div
              className="card shadow-lg border-0 rounded-4"
              style={{ backgroundColor: "#ffffff" }}
            >
              <div className="card-body p-5">

                <div className="text-center mb-4">
                  <h2
                    className="fw-bold"
                    style={{ color: "#C5B3D3" }}
                  >
                    Search Pet
                  </h2>

                  <p className="text-muted">
                    Enter the Pet ID to search pet details
                  </p>
                </div>

                <div className="row g-4">

                  <div className="col-12">
                    <label className="form-label fw-semibold">
                      Pet ID
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Pet ID"
                    />
                  </div>

                  <div className="col-12 text-center">
                    <button
                      className="btn px-5 py-2 fw-bold"
                      style={{
                        backgroundColor: "#C5B3D3",
                        color: "#fff",
                        border: "none",
                        borderRadius: "12px",
                      }}
                    >
                      Search
                    </button>
                  </div>

                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default SearchPet