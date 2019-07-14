import React from 'react'
import { Marker, Popup } from "react-leaflet"

class Flinktser extends React.Component {

    render() {
        return (
            <Marker position={[this.props.bike.geometry.position.coordinates[1], this.props.bike.geometry.position.coordinates[0]]}>
                <Popup>
                    A pretty CSS3 popup.
                <br />
                    Easily customizable.
              </Popup>
            </Marker>
        )
    }

}

export default Flinktser