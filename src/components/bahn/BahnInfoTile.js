import React from "react"

function BahnInfoTile(props) {
    
    return (
        <tr>
            <th scope="row"><p class="text-left">{props.bahn.line}</p></th>
            <th><p class="text-center">{props.bahn.destination}</p></th>
            <th><p class="text-right">in {props.bahn.arrival}min</p></th>
        </tr>
    )
}

export default BahnInfoTile