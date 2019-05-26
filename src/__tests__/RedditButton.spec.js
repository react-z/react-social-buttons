/* setup enzyme */
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

/* setup jsdom */
var jsdom = require('jsdom')
const { JSDOM } = jsdom
const window = new JSDOM('').window
global.window = window
global.document = window.document

import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'

import {
  RedditButton,
} from '../main.js';

test('FacebookLikeButton renders the correct elements and props', () => {
  const redditProps = {
    url: 'https://mysite.com',
    button: <span>{'Share via Reddit'}</span>,
  };

  const wrapper = mount(
    <RedditButton {...redditProps} />
  )

  expect(wrapper.instance().props.url).toEqual('https://mysite.com')
  expect(wrapper.find('a').length).toEqual(1)
  expect(wrapper.find('a').props().href).toContain('reddit.com/submit')
  expect(wrapper.find('span').text()).toEqual('Share via Reddit')

  // console.log(wrapper.debug())
})
