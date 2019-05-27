import React from 'react'
import { Map, TileLayer } from "react-leaflet";
import Flinktser from './Flinkster';

class NVMap extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      lat: 48.78159,
      lng: 9.167320,
      zoom: 13
    };
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    const bikePos = this.props.bikes.map(bike => {
      return (
        <Flinktser bike={bike} />
      )
    })
    return (
      <div id="map">
        <Map style={{ height: "100vh" }} center={position} zoom={17}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {bikePos}
        </Map>
      </div>
    );
  }
}

export default NVMap