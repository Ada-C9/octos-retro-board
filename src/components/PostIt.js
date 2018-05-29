import React from 'react';
import PropTypes from 'prop-types';

import './PostIt.css';

class PostIt extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    finished: PropTypes.bool,
  }

  static defaultProps = {
    finished: false
  }

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
