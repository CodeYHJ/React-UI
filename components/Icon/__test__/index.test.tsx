import Icon from "../index"
const { createIcon, MainIcon } = Icon
import React from "react"
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
describe('localIcon', () => {
    it('renders an `.code-ui-svg` component', () => {
        const json = renderer.create(<MainIcon />)
        expect(json).toMatchSnapshot()
    })
    it('trigger onOK once when click on svg', () => {
        const onClick = jest.fn()
        const wrapper = shallow(<MainIcon onClick={onClick} />);
        wrapper.find('.code-ui-svg').simulate('click')
        expect(onClick).toBeCalled()
    })
})

describe('createIcon', () => {
    it('return a localIcon', () => {
        const LocalIcon = createIcon('//at.alicdn.com/t/font_1973431_ia5jq3fwut.js')
        expect(Icon).toEqual(LocalIcon)
    })

})