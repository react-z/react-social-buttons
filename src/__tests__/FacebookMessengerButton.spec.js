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
  FacebookMessengerButton,
} from '../main.js';

test('FacebookMessengerButton renders the correct elements and props', () => {
  const url = 'https://mysite.com';

  const wrapper = mount(
    <FacebookMessengerButton url={url} />
  )

  expect(wrapper.instance().props.url).toEqual(url)
  expect(wrapper.find('#fbsendbutton').length).toEqual(1)

  // console.log(wrapper.debug())
})
