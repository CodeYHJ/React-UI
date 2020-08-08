import { mount, shallow } from 'enzyme';
import renderer from "react-test-renderer"
import Button from '../index'
import React from 'react'

describe('<Button/>', () => {
    it('renders an `.code-ui-button-default` component', () => {
        const json = renderer.create(<Button />).toJSON()
        const wrapper = shallow(<Button />);
        expect(wrapper.find('.code-ui-button-default')).toHaveLength(1);
        expect(json).toMatchSnapshot()
    });
    it('renders an `.code-ui-button-main` component', () => {
        const json = renderer.create(<Button type="main" />).toJSON()
        const wrapper = shallow(<Button type="main" />);
        expect(wrapper.find('.code-ui-button-main')).toHaveLength(1);
        expect(json).toMatchSnapshot()

    });
    it('renders an `.code-ui-button-danger` component', () => {
        const json = renderer.create(<Button type="danger" />).toJSON()
        const wrapper = shallow(<Button type="danger" />);
        expect(wrapper.find('.code-ui-button-danger')).toHaveLength(1);
        expect(json).toMatchSnapshot()

    });
    it('renders an `.code-ui-button-warn` component', () => {
        const json = renderer.create(<Button type="warn" />).toJSON()
        const wrapper = shallow(<Button type="warn" />);
        expect(wrapper.find('.code-ui-button-warn')).toHaveLength(1);
        expect(json).toMatchSnapshot()
    });
    it('renders an `.code-ui-button-safe` component', () => {
        const json = renderer.create(<Button type="safe" />).toJSON()
        const wrapper = shallow(<Button type="safe" />);
        expect(wrapper.find('.code-ui-button-safe')).toHaveLength(1);
        expect(json).toMatchSnapshot()
    });
    it('renders children when passed in', () => {
        const wrapper = shallow((
            <Button>
                测试
            </Button>
        ));
        expect(wrapper.contains(<span>测试</span>)).toEqual(true)
    });
    it('simulate onClick Event', () => {
        const onClick = jest.fn()
        const wrapper = mount(<Button onClick={onClick} />)
        wrapper.find('.code-ui-button-default').simulate('click');
        expect(onClick).toBeCalled()
    })
})