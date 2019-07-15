import React from 'react';
import Bahn from "./components/bahn/Bahn"
import NVMap from "./components/map/NVMap"
import axios from 'axios';
import "./App.css"
import Clock from './components/Clock'
import logo from './dhbw-logo.jpg'
import Footer from './components/footer/Footer'

class App extends React.Component {

  async sendBikeReq() {
    axios
      .get("http://localhost:8081/bike")
      .then(response => {
        const data = response.data
        this.setState({
          bike: data
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  async sendCarReq() {
    axios
      .get("http://localhost:8081/car")
      .then(response => {
        const data = response.data
        this.setState({
          car: data
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  constructor(props) {
    super(props)
    this.state = {
      bike: null,
      car: null
    }

    this.update()

  }

  componentDidMount() {
    this.intervalID = setInterval(
      () =>this.update(),
      120000
    );
  }

  update() {
    this.sendBikeReq()
    this.sendCarReq()
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  render() {

    if (this.state.bike === null || this.state.car === null) {
      return (
        <h1>Loading...</h1>
      )
    }

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
          <div className="col-8">
            <Bahn />
          </div>
          <div className="col-4">
            <div className="container-fluid h-100">
              <NVMap bikes={this.state.bike} />
            </div>
          </div>
        </div>
        {
          <Footer bikes={this.state.bike} cars={this.state.car} />
        }
      </div>
    );
  }
}

export default App;