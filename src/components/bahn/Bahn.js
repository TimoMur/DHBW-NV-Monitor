import React from "react"
import "./Bahn.css"
import BahnInfoTile from "./BahnInfoTile"
import axios from 'axios'

class Bahn extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            trains: []
        }

        this.update()

    }

    componentDidMount() {
        this.intervalID = setInterval(
            () => this.update(),
            120000
        );
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    update() {
        axios
            .get("http://localhost:8080/departure?locRef=de%3A08111%3A6056")
            .then(response => {
                const data = response.data.stopEvents
                // Ugly as hell
                const sortedData = data.sort((a, b) => ((Math.round((((new Date(b.thisCall.timetabledTime) - new Date()) % 86400000) % 3600000) / 60000))) - Math.round((((new Date(a.thisCall.timetabledTime) - new Date()) % 86400000) % 3600000) / 60000)).reverse()
                const vvs = sortedData.map(stopEvent => {
                    return (
                        <BahnInfoTile
                            bahn={stopEvent}
                        />
                    )
                })

                this.setState({ trains: vvs })

            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        return (
            <div id="bahn-text" className="container-fluid">
                <div id="bahn-header" className="row w-100">
                    <div className="col-2 border">Haltestelle</div>
                    <div className="col-1 border">Linie</div>
                    <div className="col-3 border">Ziel</div>
                    <div className="col-4 border">&Uuml;ber</div>
                    <div className="col-2 border">Abfahrt</div>
                    {
                        //<div className="col-1 border">Hinweis</div>
                    }
                </div>
                {this.state.trains}
            </div>
        )
    }
}

export default Bahn