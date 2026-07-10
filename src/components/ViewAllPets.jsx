import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewPets = () => {

    const [data, changeData] = useState([])

    const fetchPetData = () => {
        axios.get("https://raw.githubusercontent.com/anishpdm/demo-json-api/refs/heads/main/pet.json").then(
            (response) => {
                changeData(response.data)
            }
        ).catch()
    }

    useEffect(
        () => {
            fetchPetData()
        }
    )

    return (
        <div style={{
                background: "linear-gradient(to right, #FDF2F8, #EEF2FF)",
                minHeight: "100vh"
            }}
        >

            <NavBar />

            <div className="container py-5">

                <h2
                    className="text-center fw-bold mb-5"
                    style={{ color: "#C5B3D3" }}
                >
                    Available Pets
                </h2>

                <div className="row g-4">

                    {data.map((value, index) => {
                        return (

                            <div
                                className="col-12 col-sm-6 col-md-4 col-lg-4"
                            >

                                <div className="card h-100 border-0 shadow-lg rounded-4">

                                    <img
                                        src={value.image}
                                        className="card-img-top"
                                        alt="Pet"
                                        style={{
                                            height: "250px",
                                            objectFit: "cover",
                                            borderTopLeftRadius: "16px",
                                            borderTopRightRadius: "16px"
                                        }}
                                    />

                                    <div className="card-body">

                                        <h4
                                            className="fw-bold text-center mb-3"
                                            style={{ color: "#7C3AED" }}
                                        >
                                            {value.name}
                                        </h4>

                                        <p className="card-text">

                                            <strong>Species :</strong> {value.species}
                                            <br />

                                            <strong>Breed :</strong> {value.breed}
                                            <br />

                                            <strong>Age :</strong> {value.age}
                                            <br />

                                            <strong>Gender :</strong> {value.gender}
                                            <br />

                                            <strong>Adoption Fee :</strong> {value.adoptionFee}

                                        </p>

                                        <button
                                            className="btn w-100 fw-bold mt-3"
                                            style={{
                                                backgroundColor: "#C5B3D3",
                                                color: "#fff",
                                                border: "none",
                                                borderRadius: "12px"
                                            }}
                                        >
                                            Adopt Now
                                        </button>

                                    </div>

                                </div>

                            </div>

                        )
                    })}

                </div>

            </div>

        </div>
    )
}

export default ViewPets