import React from 'react';
import PropTypes from 'prop-types';

import Sector from './Sector';

import './Board.css';

class Board extends React.Component {
  static propTypes = {
    retroData: PropTypes.arrayOf(
      PropTypes.shape({
        sector: PropTypes.string,
        text: PropTypes.string,
        finished: PropTypes.bool,
      })
    ).isRequired,
    sectorNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  }

  getMessages(sectorName) {
    return this.props.retroData.filter((message) => {
      return message.sector === sectorName;
    });
  }

  render() {
    const sectors = this.props.sectorNames.map((sectorName, key) => {
      const messages = this.getMessages(sectorName);
      return (
        <Sector
          key={key}
          name={sectorName}
          messages={messages}
          />
      );
    });

    return (
      <main className="board">
        <h1>Retro Board</h1>
        <div className="sector-list">
          {sectors}
        </div>
      </main>
    );
  }
}

export default Board;
