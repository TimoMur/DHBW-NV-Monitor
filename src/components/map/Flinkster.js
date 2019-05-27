import React from 'react'
import { Marker, Popup } from "react-leaflet"

class Flinktser extends React.Component {

    render() {

        return (
            <Marker position={[this.props.bike.latitude, this.props.bike.longitude]}>
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