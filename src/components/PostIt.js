import React from 'react';

import './PostIt.css';

class PostIt extends React.Component {
  render() {
    let className = 'post-it';
    if (this.props.finished) {
      className += ' finished';
    }
    return (
      <li className={className}>
        {this.props.text}
      </li>
    );
  }
}

export default PostIt;
