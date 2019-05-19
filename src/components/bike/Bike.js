import React from "react"
import logo from "./bike-logo.png"
import "./bike.css"

function Bike() {
    return (
        <div className="row border border-dark rounded p-2">
            <div className="col-3">
                <div>
                    <img className="bike-logo" src={logo} alt="Car Logo" />
                </div>
            </div>
            <div className="col-8 mb-auto mt-auto">
                <h1>Bike</h1>
            </div>
            <div className="w-100"></div>
            <div className="col mt-2 bg-success border border-light">
                <h1>Frei</h1>
            </div>
            <div className="col mt-2 bg-danger border border-light">
                <h1>Belegt</h1>
            </div>
            <div className="w-100"></div>
            <div className="col mt-2 bg-danger border border-light">
                <h1>Belegt</h1>
            </div>
            <div className="col mt-2 bg-danger border border-light">
                <h1>Belegt</h1>
            </div>
        </div >
    )
}

export default Bike