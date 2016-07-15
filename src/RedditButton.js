import ReactDOM from 'react-dom'
import React, { Component, PropTypes } from 'react'

export default class RedditButton extends Component {

  redirectToReddit () {
    window.location.href = `//www.reddit.com/submit?url=` +
      `${encodeURIComponent(window.location)}`;

    return false;
  }

  render () {
    const props = this.props;

    return (
      <a href={'//www.reddit.com/submit'}
        onClick={::this.redirectToReddit} >
        {props.button}
      </a>
    );
  };
}

RedditButton.propTypes = {
  url: PropTypes.string.isRequired,
  button: PropTypes.node.isRequired,
};
