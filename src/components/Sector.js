import React from 'react';
import PropTypes from 'prop-types';

import PostIt from './PostIt';

import './Sector.css';

class Sector extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    messages: PropTypes.array.isRequired,
  }

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
