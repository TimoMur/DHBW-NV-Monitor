import React from "react"

function textAvailable(input) {
    return input ? "Frei" : "Belegt"
}

function BikeTile(props) {
    return (
        <div className="w-100 mt-2">
            <h1 className={props.available ? "bg-success p-1" : "p-1 bg-danger"}>
            {textAvailable(props.available)}
            </h1>
        </div>

    )
}

export default BikeTile