import React from 'react';
import Bahn from "./components/bahn/Bahn"
import NVMap from "./components/map/NVMap"
import axios from 'axios';

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
      <div className="App" >
        <header className="container-fluid">
          <div className="row">
            <Bahn />
            <div className="col-6">
              <NVMap bikes={this.state.bike} />
            </div>
          </div>
        </header>

      </div>
    );
  }
}

export default App;
