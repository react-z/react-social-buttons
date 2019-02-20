import test from 'tape';
import React from 'react';
import { mount } from 'enzyme';

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
} from '../src/main.js';

test('Social components', (t) => {
  const url = 'https://mysite.com';
  const fb = mount(<FacebookLikeButton url={url} />);
  const tw = mount(<TwitterButton url={url} />);
  const goo = mount(<GoogleButton url={url} />);
  const pin = mount(<PinterestButton url={url} />);

  // WhatsAppButton
  const whatsAppProps = {
    msg: 'test',
    button: <span>{'Share via WhatsApp'}</span>,
  };
  const wapp = mount(<WhatsAppButton {...whatsAppProps} />);

  // RedditButton
  const redditPorps = {
    url,
    button: <span>{'Share via Reddit'}</span>,
  };
  const reddit = mount(<RedditButton {...redditPorps} />);

  // EmailButton
  const emailProps = {
    subject: 'Test email',
    cc: 'test@gmail.com',
    bcc: 'test@gmail.com',
    body: 'Your test message',
    button: <span>{'Share via Email'}</span>,
  };
  const email = mount(<EmailButton {...emailProps} />);


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
  t.equal(
    email.props().subject, emailProps.subject, 'subject is set for email button'
  );
  t.end();
});
