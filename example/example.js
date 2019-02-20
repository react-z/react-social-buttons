import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import {
  TwitterButton,
  FacebookLikeButton,
  FacebookShareButton,
  FacebookMessengerButton,
  GoogleButton,
  GoogleHangoutButton,
  PinterestButton,
  WhatsAppButton,
  RedditButton,
  EmailButton,
} from '../lib/main.js'; /* 'react-social-buttons' */

class TestComponent extends Component {

  isBrowser() {
    return !(typeof document === "undefined" || typeof window === "undefined");
  }

  render() {
    let url = ''
    if (this.isBrowser()) {
      url = window.location.href;
    }

    const whatsAppProps = {
      msg: url,
      button: <img
        src={'http://4.bp.blogspot.com/-lpSFmxRBGHk/VS_qaC4lVpI/' +
          'AAAAAAAADVA/_w2ak19mhYU/s1600/whatsapp-share-button.png'}
        width={100}
      />
    };

    const redditProps = {
      url,
      button: <img src={'//www.redditstatic.com/spreddit1.gif'}
        alt={'submit to reddit'}
        border={'0'}
      />
    };

    const emailProps = {
      subject: 'Test email',
      cc: 'test@gmail.com',
      bcc: 'test@gmail.com',
      body: 'Your test message',
      button: <span>{'Share via Email'}</span>,
    };

    return (
      <div id="buttons">
        <FacebookLikeButton url={url} />
        <br />
        <FacebookShareButton url={url} />
        <br />
        <FacebookMessengerButton url={url} />
        <br />
        <TwitterButton url={url} text="this page is cool" />
        <br />
        <GoogleButton url={url} />
        <br />
        <GoogleHangoutButton url={url} />
        <br />
        <PinterestButton url={url} />
        <br />
        <WhatsAppButton {...whatsAppProps} />
        <br />
        <RedditButton {...redditProps} />
        <br />
        <EmailButton {...emailProps} />
      </div>
    )
  }
}

ReactDOM.render(<TestComponent />, document.getElementById('root'))
