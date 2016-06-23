import expect from 'expect'
import test from 'tape'
import React from 'react'
import { shallow, mount } from 'enzyme'
import { setupJsdom } from './jsdom'
import { TwitterButton, FacebookLikeButton, FacebookShareButton, FacebookMessengerButton,
         GoogleButton, GoogleHangoutButton, PinterestButton } from '../src/main.js'

test('Social components', (t) => {
  setupJsdom()

  const fb = mount( <FacebookLikeButton url='https://mysite.com' /> )
  const tw = mount( <TwitterButton url='https://mysite.com' /> )
  const goo = mount( <GoogleButton url='https://mysite.com' /> )
  const pin = mount( <PinterestButton url='https://mysite.com' /> )

  t.equal( fb.props().url, 'https://mysite.com', 'url is set for facebook like button' )
  t.equal( tw.props().url, 'https://mysite.com', 'url is set for twitter button' )
  t.equal( goo.props().url, 'https://mysite.com', 'url is set for google button' )
  t.equal( pin.props().url, 'https://mysite.com', 'url is set for pinterest button' )

  t.end()
});
