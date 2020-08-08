import renderer from "react-test-renderer"
import Dialog from "../index"
import React from "react"
import { shallow } from "enzyme"

describe('Dialog', () => {
    it('test', () => {
        expect(true).toBe(true)

    })
    // it('renders an `.code-ui-dialog` component', () => {
    //     const json = renderer.create(<Dialog visble={true} />).toJSON()
    //     expect(json).toMatchSnapshot()
    // })
    // it('trigger onCancel once when click on cancel button', () => {
    //     const onCancel = jest.fn()
    //     const wrapper = shallow(<Dialog visble={true} onCancel={onCancel} />);
    //     wrapper.find('.code-ui-dialog-cancel').simulate('click')
    //     expect(onCancel).toBeCalled()
    // })
    // it('trigger onOK once when click on OK button', () => {
    //     const onOk = jest.fn()
    //     const wrapper = shallow(<Dialog visble={true} onOk={onOk} />);
    //     wrapper.find('.code-ui-dialog-ok').simulate('click')
    //     expect(onOk).toBeCalled()
    // })
})