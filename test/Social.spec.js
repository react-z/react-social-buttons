import expect from 'expect';
import test from 'tape';
import React from 'react';
import { shallow, mount } from 'enzyme';
import { setupJsdom } from './jsdom';
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
} from '../src/main.js';

test('Social components', (t) => {
  setupJsdom();

  const url = 'https://mysite.com';
  const fb = mount( <FacebookLikeButton url={url} /> );
  const tw = mount( <TwitterButton url={url} /> );
  const goo = mount( <GoogleButton url={url} /> );
  const pin = mount( <PinterestButton url={url} /> );

  // WhatsAppButton
  const whatsAppProps = {
    msg: 'test',
    button: <span>{'Share via WhatsApp'}</span>,
  };
  const wapp = mount( <WhatsAppButton {...whatsAppProps} /> );

  // RedditButton
  const redditPorps = {
    url,
    button: <span>{'Share via Reddit'}</span>,
  };
  const reddit = mount( <RedditButton {...redditPorps} /> );

  t.equal(
    fb.props().url, url, 'url is set for facebook like button'
  );
  t.equal(
    tw.props().url, url, 'url is set for twitter button'
  );
  t.equal(
    goo.props().url, url, 'url is set for google button'
  );
  t.equal(
    pin.props().url, url, 'url is set for pinterest button'
  );
  t.equal(
    wapp.props().msg, 'test', 'message is set for whatsapp button'
  );
  t.equal(
    reddit.props().url, url, 'url is set for reddit button'
  );

  t.end();
});
