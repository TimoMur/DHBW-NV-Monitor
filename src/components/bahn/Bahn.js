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

        axios
            .get("http://localhost:8080/departure?locRef=de%3A08111%3A6056")
            .then(response => {
                const data = response.data.stopEvents
                // Ugly as hell
                const sortedData = data.sort((a, b) => ((Math.round((((new Date(b.thisCall.timetabledTime) - new Date()) % 86400000) % 3600000) / 60000))) - Math.round((((new Date(a.thisCall.timetabledTime) - new Date()) % 86400000) % 3600000) / 60000))
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
            <div class="container-fluid">
                <div class="row w-100">
                    <div class="col-2 border">Haltestelle</div>
                    <div class="col-1 border">Linie</div>
                    <div class="col-3 border">Ziel</div>
                    <div class="col-3 border">&Uuml;ber</div>
                    <div class="col-2 border">Abfahrt</div>
                    <div class="col-1 border">Hinweis</div>
                </div>
                {this.state.trains}
            </div >
        )
    }
}

export default Bahn