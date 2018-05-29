import React from 'react';
import Sector from './Sector';

class Board extends React.Component {
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
          name={sectorName}
          key={key}
          messages={messages}
          />
      );
    });

    return (
      <main>
        <h1>Hello from the Board component</h1>
        {sectors}
      </main>
    );
  }
}

export default Board;
