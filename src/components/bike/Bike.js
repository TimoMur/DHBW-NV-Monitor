import React from "react"
import logo from "./bike-logo.png"
import "./bike.css"
import bikeData from "./bikeTestData"
import BahnTile from "./BikeTile"

function Bike() {

    const data = bikeData.map(bike => {
        return (
            <BahnTile available={bike.available} />
        )
    })

    return (
        <div className="row border border-dark rounded p-2">
            <div className="col-2">
                <div>
                    <img className="bike-logo" src={logo} alt="Car Logo" />
                </div>
            </div>
            <div className="col-8 mb-auto mt-auto">
                <h1>Bike</h1>
            </div>
            <div className="w-100"></div>
            {data}
        </div >
    )
}

export default Bike