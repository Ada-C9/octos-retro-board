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
  {sector: "More Of", text: "Snacks", finished: true},
  {sector: "Less Of", text: "Homework", finished: false},
  {sector: "Challenges", text: "React", finished: false},
  {sector: "Challenges", text: "JSX", finished: true},
  {sector: "More Of", text: "Joy", finished: false},
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
