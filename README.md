## react-social-buttons

[![npm version](https://badge.fury.io/js/react-social-buttons.svg)](https://badge.fury.io/js/react-social-buttons)

Social buttons component for react, includes:
  Google;
  GoogleHangout;
  Facebook;
  Twitter;
  Pinterest;
  Reddit;
  WhatsApp;
  Email;

![](https://raw.githubusercontent.com/StevenIseki/react-social-buttons/master/example/screenshot.png)

## Install

``` js
yarn add react-social-buttons
```

## Versions

#### `1.0.3` uses React `^0.13.1`

#### `1.0.9` uses React `^15.1.0`

#### `1.1.0` uses React `^16.0.0`

## Use

``` js
import ReactDOM from 'react-dom';
import React, { Component, PropTypes } from 'react';
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
} from 'react-social-buttons';

class TestComponent extends Component {

  isBrowser () {
    return !(typeof document === "undefined" || typeof window === "undefined");
  }

 render () {
   let url = ''
   if (this.isBrowser()) { url = window.location.href; }

   const whatsAppProps = {
     msg: 'test',
     button: <span>{'Your custom content'}</span>,
   };

   const redditProps = {
     url,
     button: <img src={'//www.redditstatic.com/spreddit1.gif'}
                  alt={'submit to reddit'} border={'0'} />,
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
       <FacebookShareButton url={url} />
       <FacebookMessengerButton url={url} />
       <TwitterButton url={url} text={'this page is cool'}/>
       <GoogleButton url={url} />
       <GoogleHangoutButton url={url} />
       <PinterestButton url={url} />
       <WhatsAppButton {...whatsAppProps} />
       <RedditButton {...redditProps} />
       <EmailButton {...emailProps} />
     </div>
   )
 }
}

ReactDOM.render( <TestComponent />, document.getElementById('root') )
```

## Development
    yarn
    yarn dev

## Test
    yarn test

## Build
    yarn
    yarn build

## Publish
    npm login
    npm version patch
    git add -A
    git push origin master
    npm publish

## License

[MIT](http://isekivacenz.mit-license.org/)
