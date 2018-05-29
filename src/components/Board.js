import React from 'react';
import Sector from './Sector';

const sectorNames = [
  "More Of",
  "Less Of",
  "Challenges",
  "Positive Experiences",
];

class Board extends React.Component {
  render() {
    return (
      <main>
        <h1>Hello from the Board component</h1>
        {sectorNames.map((sectorName, key) => {
          return (
            <Sector name={sectorName} key={key}/>
          );
        })}
      </main>
    );
  }
}

export default Board;
