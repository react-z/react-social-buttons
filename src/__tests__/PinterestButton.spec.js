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
  PinterestButton,
} from '../main.js';

test('FacebookLikeButton renders the correct elements and props', () => {
  const url = 'https://mysite.com';

  const wrapper = mount(
    <PinterestButton url={url} />
  )

  expect(wrapper.instance().props.url).toEqual(url)
  expect(wrapper.find('#pinbutton').length).toEqual(1)
  expect(wrapper.find('img').length).toEqual(1)
  expect(wrapper.find('img').props().src).toContain('assets.pinterest.com')

  // console.log(wrapper.debug())
})
