import { mount, shallow } from 'enzyme';

import renderer from 'react-test-renderer';

import React from 'react';

import Button from '../index';

describe('<Button/> Component', () => {
  describe('render', () => {
    it('renders an `.code-ui-button-default` component', () => {
      const json = renderer.create(<Button />).toJSON();

      const wrapper = shallow(<Button />);

      expect(wrapper.find('.code-ui-button-default')).toHaveLength(1);

      expect(json).toMatchSnapshot();
    });

    it('renders an `.code-ui-button-primary` component', () => {
      const json = renderer.create(<Button type="primary" />).toJSON();

      const wrapper = shallow(<Button type="primary" />);

      expect(wrapper.find('.code-ui-button-primary')).toHaveLength(1);

      expect(json).toMatchSnapshot();
    });

    it('renders an `.code-ui-button-danger` component', () => {
      const json = renderer.create(<Button type="danger" />).toJSON();

      const wrapper = shallow(<Button type="danger" />);

      expect(wrapper.find('.code-ui-button-danger')).toHaveLength(1);

      expect(json).toMatchSnapshot();
    });

    it('renders an `.code-ui-button-warn` component', () => {
      const json = renderer.create(<Button type="warn" />).toJSON();

      const wrapper = shallow(<Button type="warn" />);

      expect(wrapper.find('.code-ui-button-warn')).toHaveLength(1);

      expect(json).toMatchSnapshot();
    });

    it('renders an `.code-ui-button-success` component', () => {
      const json = renderer.create(<Button type="success" />).toJSON();

      const wrapper = shallow(<Button type="success" />);

      expect(wrapper.find('.code-ui-button-success')).toHaveLength(1);

      expect(json).toMatchSnapshot();
    });

    it('renders an `.code-ui-button-dashed` component', () => {
      const json = renderer.create(<Button type="dashed" />).toJSON();

      const wrapper = shallow(<Button type="dashed" />);

      expect(wrapper.find('.code-ui-button-dashed')).toHaveLength(1);

      expect(json).toMatchSnapshot();
    });

    it('renders an disabled of dashed', () => {
      const json = renderer.create(<Button type="dashed" disabled />).toJSON();

      const wrapper = shallow(<Button type="dashed" disabled />);

      expect(wrapper.find('.code-ui-button-dashed-disabled')).toHaveLength(1);

      expect(json).toMatchSnapshot();
    });

    it('renders an disabled of default', () => {
      const json = renderer.create(<Button disabled />).toJSON();

      const wrapper = shallow(<Button disabled />);

      expect(wrapper.find('.code-ui-button-disabled')).toHaveLength(1);

      expect(json).toMatchSnapshot();
    });

    it('renders an disabled of primary', () => {
      const json = renderer.create(<Button type="primary" disabled />).toJSON();

      const wrapper = shallow(<Button type="primary" disabled />);

      expect(wrapper.find('.code-ui-button-disabled')).toHaveLength(1);

      expect(json).toMatchSnapshot();
    });

    it('renders loading', () => {
      const json = renderer.create(<Button type="primary" loading />).toJSON();

      const wrapper = shallow(<Button type="primary" loading />);

      expect(wrapper.find('.code-ui-button-loading')).toHaveLength(1);

      expect(json).toMatchSnapshot();
    });

    it('renders children when passed in', () => {
      const wrapper = shallow(<Button>测试</Button>);

      expect(wrapper.contains(<span>测试</span>)).toEqual(true);
    });
  });

  describe('event', () => {
    it('should handle onClick Event', () => {
      const onClick = jest.fn();

      const wrapper = mount(<Button onClick={onClick} />);

      wrapper.find('.code-ui-button-default').simulate('click');

      expect(onClick).toBeCalled();
    });
  });
});
