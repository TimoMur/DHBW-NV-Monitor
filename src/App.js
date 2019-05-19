import React from 'react';
import Bahn from "./components/bahn/Bahn"
import Bike from './components/bike/Bike';
import Car from "./components/car/Car"

function App() {
  return (
    <div className="App">
      <header className="container-fluid">
        <div className="row">
          <Bahn />
          <div className="col-4">
              <Bike />
              <Car />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
