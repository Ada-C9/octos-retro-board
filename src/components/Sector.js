import React from 'react';
import PostIt from './PostIt';

class Sector extends React.Component {
  render() {
    const postIts = this.props.messages.map((message, key) => {
      return (<PostIt key={key} text={message.text} />);
    });
    return (
      <section>
        <h2>
          {this.props.name}
        </h2>
        <ul>
          {postIts}
        </ul>
      </section>
    );
  }
}

export default Sector;
