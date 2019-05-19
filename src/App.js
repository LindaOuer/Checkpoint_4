import React, { Component } from "react";
import "./App.css";
import IdBox from "./components/IdBox";
import { bw, hq, sw, cm } from "./images";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <div>
          <h1> Meet the team</h1>
          <div className="ids">
            <IdBox
              image={bw}
              firstName="Natasha"
              name="Romanoff"
              activity="Spy"
              funct="Tactician"
            />
            <IdBox
              image={hq}
              firstName="Harley"
              name="Quinn"
              activity="Ehhh nothing"
              funct="Psych"
            />
            <IdBox
              image={sw}
              firstName="Wanda"
              name="Maximoff"
              activity="Magic"
              funct="Witch"
            />
            <IdBox
              image={cm}
              firstName="Carol"
              name="Danvers"
              activity="Pilot"
              funct="Space Explorer"
            />
          </div>
        </div>
        <footer className="App-footer" />
      </div>
    );
  }
}

export default App;
