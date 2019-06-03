import React from "react"

class BahnInfoTile extends React.Component {

    constructor(props) {
        super(props)

        const timetabledTime = Math.round((((new Date(this.props.bahn.thisCall.timetabledTime) - new Date()) % 86400000) % 3600000) / 60000); 

        this.state = {
            inTime: timetabledTime
        }

    }

    render() {

        return (
            <tr>
                <th scope="row"><p class="text-left">{this.props.bahn.service.publishedLineName}</p></th>
                <th><p class="text-center">{this.props.bahn.service.routeDescription}</p></th>
                <th><p class="text-right">in {this.state.inTime}min</p></th>
            </tr>
        )
    }
}

export default BahnInfoTile