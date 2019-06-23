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
            <div class="row w-100 border">
                <div class="col-2 border">
                    {this.props.bahn.thisCall.stopPointName}
                </div>
                <div class="col-1 border">
                    {this.props.bahn.service.publishedLineName}
                </div>
                <div class="col-3 border">
                    {this.props.bahn.service.destinationText}
                </div>
                <div class="col-3 border">
                    {this.props.bahn.service.routeDescription}
                </div>
                <div class="col-2 border">
                    {new Date(this.props.bahn.thisCall.estimatedTime === null ? this.props.bahn.thisCall.timetabledTime : this.props.bahn.thisCall.estimatedTime).toLocaleTimeString()}
                </div>
                <div class="col-1 border">
                    in {this.state.inTime}min
                </div>
            </div>
        )
    }
}

export default BahnInfoTile