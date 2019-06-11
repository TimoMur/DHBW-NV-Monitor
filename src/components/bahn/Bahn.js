import React from "react"
import logo from "./s-bahn-logo.png"
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
                const sortedData = data.sort((a, b) => ((Math.round((((new Date(b.thisCall.timetabledTime) - new Date()) % 86400000) % 3600000) / 60000)))- Math.round((((new Date(a.thisCall.timetabledTime) - new Date()) % 86400000) % 3600000) / 60000))
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
            <div className="col-6 p-3  border border-dark rounded">
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
                            {this.state.trains}
                        </tbody>
                    </table>
                </div>
            </div >
        )
    }
}

export default Bahn