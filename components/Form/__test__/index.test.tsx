import React, { ChangeEvent, useState } from 'react';
import { Form, Input, Icon } from "../../index"
import { shallow, mount } from 'enzyme';
import renderer from "react-test-renderer"

describe('Form', () => {
    describe('render', () => {
        it('render an Form Component', () => {
            const form = (
                <Form>
                    <Form.Item label="test">
                        <Input name="password" />
                    </Form.Item>
                </Form>
            )
            const json = renderer.create(form).toJSON()
            expect(json).toMatchSnapshot()
        })
    })
    describe('verification', () => {
        it('should handle onChange on fomatterRule', () => {
            const form = (
                <Form>
                    <Form.Item label="账号" rule={{ require: true, message: "账号长度必须大于等于3", formatterRule: { type: 'text', len: 10, min: 3, max: 10 }, trigger: "change" }}>
                        <Input name="user" />
                    </Form.Item>
                </Form>
            )
            const form1 = (
                <Form>
                    <Form.Item label="账号" rule={{ require: true, message: "账号长度必须大于等于3", formatterRule: { type: 'text', len: 10, min: 3, max: 10 } }}>
                        <Input name="user" />
                    </Form.Item>
                </Form>
            )
            const mockEvent = {
                target: {
                    value: 'Te'
                }
            }
            const wrapper = mount(form)
            const wrapper1 = mount(form1)
            wrapper.find('input').simulate('change', mockEvent)
            wrapper1.find('input').simulate('change', mockEvent)
            const tipNum = wrapper.find('.code-ui-formItemInput-checkTip').getElements().length
            const tipNum1 = wrapper1.find('.code-ui-formItemInput-checkTip').getElements().length
            expect(tipNum).toBe(1)
            expect(tipNum1).toBe(1)
        })
        it('should handle onBlur on fomatterRule', () => {
            const form = (
                <Form>
                    <Form.Item label="账号" rule={{ require: true, message: "账号长度必须大于等于3", formatterRule: { type: 'text', len: 10, min: 3, max: 10 }, trigger: "blur" }}>
                        <Input name="user" />
                    </Form.Item>
                </Form>
            )
            const mockEvent = {
                target: {
                    value: 'Te'
                }
            }
            const wrapper = mount(form)
            wrapper.find('input').simulate('change',mockEvent)
            wrapper.find('input').simulate('blur')
            const tipNum = wrapper.find('.code-ui-formItemInput-checkTip').getElements().length
            expect(tipNum).toBe(1)
        })
    })
})