import React from 'react';
import Bahn from "./components/bahn/Bahn"
import NVMap from "./components/map/NVMap"
import axios from 'axios';
import "./App.css"
import Clock from './components/Clock'
import logo from './dhbw-logo.jpg'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bike: []
    }

    this.send()

  }

  send() {
    axios
      .get("http://localhost:8081/data")
      .then(response => {
        const data = response.data
        this.setState({ bike: data })
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  render() {

    return (
      <div className="container-fluid p-4" >
        <div className="row">
          <div className="col-8 text-left">
            <h1 className="align-middle">Öffentlicher Nahverkehr und Alternativen</h1>
          </div>
          <div className="col-2 text-center font-weight-bold badge badge-dark text-wrap">
            <Clock />
          </div>
          <div className="col-2 text-right">
            <img className="dhbw-logo" src={logo} alt="DHBW Logo" />
          </div>
        </div>
        <div className="main row mt-4">
          <div class="col-8">
            <Bahn />
          </div>
          <div className="col-4">
            <div class="container-fluid">
              <NVMap bikes={this.state.bike} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
