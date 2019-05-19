import React from "react"
import logo from "./car-logo.png"
import "./Car.css"

function Car() {
    return (
        <div className="row row border border-dark rounded p-2">
            <div className="col-2">
                <div>
                    <img className="car-logo" src={logo} alt="Car Logo" />
                </div>
            </div>
            <div className="col-8 mb-auto mt-auto">
                <h1>Car</h1>
            </div>
            <div className="w-100"></div>
            <div className="col mt-2 bg-success border border-light">
                <h1>Frei</h1>
            </div>
            <div className="col mt-2 bg-success border border-light">
                <h1>Frei</h1>
            </div>
            <div className="w-100"></div>
            <div className="col mt-2 bg-success border border-light">
                <h1>Frei</h1>
            </div>
            <div className="col mt-2 bg-danger border border-light">
                <h1>Belegt</h1>
            </div>
        </div >
    )
}

export default Car