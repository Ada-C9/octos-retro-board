import React from 'react';

class Sector extends React.Component {
  render() {
    return (
      <section>
        <h2>
          {this.props.name}
        </h2>
      </section>
    );
  }
}

export default Sector;
