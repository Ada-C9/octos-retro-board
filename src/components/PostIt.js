import React from 'react';

class PostIt extends React.Component {
  render() {
    return (
      <li>
        {this.props.text}
      </li>
    );
  }
}

export default PostIt;
