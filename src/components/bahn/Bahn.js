import React from "react"
import logo from "./s-bahn-logo.png"
import "./Bahn.css"
import BahnInfoTile from "./BahnInfoTile"

function Bahn() {
    return (
        <div className="col-8 p-3  border border-dark rounded">
            <div className="row">
                <div className="col-1">
                    <img className="bahn-logo" src={logo} alt="S-Bahn Logo" />
                </div>
                <div className="col-8 mb-auto mt-auto">
                    <h1>Bahn</h1>
                </div>
            </div>
            <div className="ml-2 mr-2 mt-3 p-2 border-top">
                <table className="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col"><p class="text-left">Linie</p></th>
                            <th scope="col"><p class="text-center">Richtung</p></th>
                            <th scope="col"><p class="text-right">Zeit</p></th>
                        </tr>
                    </thead>
                    <tbody>
                        <BahnInfoTile />
                        <BahnInfoTile />
                        <BahnInfoTile />
                    </tbody>
                </table>
            </div>
        </div >
    )
}

export default Bahn