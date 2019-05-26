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
  EmailButton,
} from '../main.js';

test('EmailButton renders the correct elements and props', () => {
  const emailProps = {
    subject: 'Test email',
    cc: 'test@gmail.com',
    bcc: 'test@gmail.com',
    body: 'Your test message',
    button: <span>{'Share via Email'}</span>,
  };

  const wrapper = mount(
    <EmailButton {...emailProps} />
  )

  expect(wrapper.instance().props.subject).toEqual('Test email')
  expect(wrapper.instance().props.cc).toEqual('test@gmail.com')
  expect(wrapper.find('a').length).toEqual(1)
  expect(wrapper.find('span').text()).toEqual('Share via Email')

  // console.log(wrapper.debug())
})
