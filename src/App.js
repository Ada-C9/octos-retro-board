import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Board from './components/Board';

const retroData = [
  {sector: "more of", message: "snacks"},
  {sector: "less of", message: "homework"},
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Board />
      </div>
    );
  }
}

export default App;
