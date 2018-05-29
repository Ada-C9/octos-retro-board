import React from 'react';
import PostIt from './PostIt';
import './Sector.css';

class Sector extends React.Component {
  render() {
    const postIts = this.props.messages.map((message, key) => {
      return (
        <PostIt key={key}
          text={message.text}
          finished={message.finished}
          />
      );
    });
    return (
      <section className="sector">
        <h2 className="sector-title">
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
