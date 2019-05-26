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
  WhatsAppButton,
} from '../main.js';

test('whatsAppProps renders the correct elements and props', () => {
  const whatsAppProps = {
    msg: 'test',
    button: <span>{'Share via WhatsApp'}</span>,
  };

  const wrapper = mount(
    <WhatsAppButton {...whatsAppProps} />
  )

  expect(wrapper.instance().props.msg).toEqual('test')
  expect(wrapper.find('a').length).toEqual(1)
  expect(wrapper.find('a').props().href).toContain('whatsapp://send')
  expect(wrapper.find('span').text()).toEqual('Share via WhatsApp')

  // console.log(wrapper.debug())
})
