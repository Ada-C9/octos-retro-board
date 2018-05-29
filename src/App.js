import React, { Component } from 'react';
import './App.css';

import Board from './components/Board';

const sectorNames = [
  "More Of",
  "Less Of",
  "Challenges",
  "Positive Experiences",
];

const retroData = [
  {sector: "More Of", text: "Snacks"},
  {sector: "Less Of", text: "Homework"},
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Board
          sectorNames={sectorNames}
          retroData={retroData}
          />
      </div>
    );
  }
}

export default App;
