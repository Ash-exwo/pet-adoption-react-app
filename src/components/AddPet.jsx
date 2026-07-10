import React from 'react'

const AddPet = () => {
  return (
    <div
      style={{
        background: "linear-gradient(to right, #FDF2F8, #EEF2FF)",
        minHeight: "100vh",
      }}
    >
      <div className="container py-5">
        <div className="row justify-content-center">

          <div className="col-12 col-md-10 col-lg-8">

            <div
              className="card shadow-lg border-0 rounded-4"
              style={{ backgroundColor: "#ffffff" }}
            >
              <div className="card-body p-5">

                <div className="text-center mb-4">
                  <h2
                    className="fw-bold"
                    style={{ color: "#7C3AED" }}
                  >
                    Add New Pet
                  </h2>

                  <p className="text-muted">
                    Fill in the pet details below
                  </p>
                </div>

                <div className="row g-4">

                  <div className="col-12 col-md-6">
                    <label className="form-label fw-semibold">
                      Pet ID
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Pet ID"
                    />
                  </div>

                  <div className="col-12 col-md-6">
                    <label className="form-label fw-semibold">
                      Pet Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Pet Name"
                    />
                  </div>

                  <div className="col-12 col-md-6">
                    <label className="form-label fw-semibold">
                      Species
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Dog / Cat / Bird..."
                    />
                  </div>

                  <div className="col-12 col-md-6">
                    <label className="form-label fw-semibold">
                      Breed
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Breed"
                    />
                  </div>

                  <div className="col-12 col-md-6">
                    <label className="form-label fw-semibold">
                      Age
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Enter Age"
                    />
                  </div>

                  <div className="col-12 col-md-6">
                    <label className="form-label fw-semibold">
                      Gender
                    </label>
                    <select className="form-select">
                      <option selected>Select Gender</option>
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </div>

                  <div className="col-12 col-md-6">
                    <label className="form-label fw-semibold">
                      Vaccinated
                    </label>
                    <select className="form-select">
                      <option selected>Select</option>
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>

                  <div className="col-12 col-md-6">
                    <label className="form-label fw-semibold">
                      Adoption Fee
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Enter Adoption Fee"
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label fw-semibold">
                      Image URL
                    </label>
                    <input
                      type="url"
                      className="form-control"
                      placeholder="Enter Image URL"
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label fw-semibold">
                      Description
                    </label>
                    <textarea
                      className="form-control"
                      rows="4"
                      placeholder="Enter Pet Description"
                    ></textarea>
                  </div>

                  <div className="col-12 text-center mt-3">
                    <button
                      className="btn px-5 py-2 fw-bold"
                      style={{
                        backgroundColor: "#7C3AED",
                        color: "#fff",
                        border: "none",
                        borderRadius: "12px",
                      }}
                    >
                      Add Pet
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

export default AddPet