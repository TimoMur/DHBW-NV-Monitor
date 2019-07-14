import React from 'react'
import BikeRow from './BikeRow'
import CarRow from './CarRow'

class Footer extends React.Component {

    constructor(props) {
        super(props)

        const bikeRows = this.props.bikes.items.slice(0, 4).map(bike => {
            return (
                <BikeRow bike={bike} />
            )
        })

        const carRows = this.props.cars.items.slice(0, 4).map(car => {
            return (
                <CarRow car={car} />
            )
        })

        this.state = {
            bikeIndex: 4,
            carIndex: 4,
            bikes: bikeRows,
            cars: carRows
        }
    }

    componentDidMount() {
        this.intervalID = setInterval(
            () => this.update(),
            5000
        );
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    update() {

        var tmpBikeIndex
        var tmpCarIndex

        if (this.state.bikeIndex >= this.props.bikes.items.length - 1) {
            tmpBikeIndex = 4
        } else {
            tmpBikeIndex = this.state.bikeIndex + 1
        }

        if (this.state.carIndex >= this.props.cars.items.length - 1) {
            tmpCarIndex = 4
        } else {
            tmpCarIndex = this.state.carIndex + 1
        }

        const bikeRows = this.props.bikes.items.slice(this.state.bikeIndex - 4, this.state.bikeIndex).map(bike => {
            return (
                <BikeRow bike={bike} />
            )
        })

        const carRows = this.props.cars.items.slice(this.state.carIndex - 4, this.state.carIndex).map(car => {
            return (
                <CarRow car={car} />
            )
        })

        this.setState({
            bikeIndex: tmpBikeIndex,
            carIndex: tmpCarIndex,
            bikes: bikeRows,
            cars: carRows
        })
    }

    render() {

        return (
            <div className="row mt-2">
                <div className="row container-fluid">
                    <div className="col border p-0">
                        <div className="bg-secondary w-auto">
                            <h2 className="text-light">Flinkster Carsharing</h2>
                        </div>
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <th>Fahrzeug</th>
                                    <th>Standort</th>
                                </thead>
                                <tbody>
                                    {this.state.cars}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col mx-1 border p-0">
                        <div className="bg-secondary">
                            <h2 className="bg-secondary text-light">Call a Bike</h2>
                        </div>
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <th>Fahrzeug</th>
                                    <th>Standort</th>
                                </thead>
                                <tbody>
                                    {this.state.bikes}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col border p-0">
                        <div className="bg-secondary">
                            <h2 className="bg-secondary text-light">DHBW Mitfahrangebote</h2>
                        </div>
                        <div id="pool" className="row p-3">
                            <h3>Ziele heute:</h3>
                            <div className="w-100"></div>
                            <p>Heilbronn</p>
                            <div className="w-100"></div>
                            <p>Mannheim</p>
                            <div className="w-100"></div>
                            <p>Freiburg</p>
                        </div>
                    </div>
                </div>
            </div>
        )

    }

}

export default Footer 