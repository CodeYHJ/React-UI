import React from 'react';

import { mount, shallow } from 'enzyme';

import Modal from '../index';

describe('Modal', () => {
  describe('render', () => {
    it('renders a base', (done) => {
      const reactWarpper = mount(
        <Modal
          opencb={() => {
            done();
          }}
          headerText="基本"
          okText="ok"
          cancelText="cancel"
          visible
        >
          Modal
        </Modal>
      );

      const maskNum = reactWarpper.find('.code-ui-dialog-mask').getElements()
        .length;

      const dialogNum = reactWarpper.find('.code-ui-dialog').getElements()
        .length;

      expect(maskNum + dialogNum).toBe(2);
    });

    it('renders a no footer', (done) => {
      const reactWarpper = mount(
        <Modal
          opencb={() => {
            done();
          }}
          headerText="基本"
          okText="ok"
          cancelText="cancel"
          visible
          footer={null}
        >
          Modal
        </Modal>
      );

      const footNum = reactWarpper.find('.code-ui-dialog-footer').getElements()
        .length;

      expect(footNum).toBe(0);
    });

    it('renders a no header', (done) => {
      const reactWarpper = mount(
        <Modal
          opencb={() => {
            done();
          }}
          headerText=""
          okText="ok"
          cancelText="cancel"
          visible
          footer={null}
        >
          Modal
        </Modal>
      );

      const headerNum = reactWarpper
        .find('.code-ui-dialog-header')
        .getElements().length;

      expect(headerNum).toBe(0);
    });

    it('api.info', () => {
      Modal.info({ mainText: 'test' });

      expect(document.querySelectorAll('.code-ui-modal-info').length).toBe(1);
    });

    it('api.error', () => {
      Modal.error({ mainText: 'test' });

      expect(document.querySelectorAll('.code-ui-modal-danger').length).toBe(1);
    });

    it('api.warn', () => {
      Modal.warn({ mainText: 'test' });

      expect(document.querySelectorAll('.code-ui-modal-warn').length).toBe(1);
    });

    it('api.success', () => {
      Modal.success({ mainText: 'test' });

      expect(document.querySelectorAll('.code-ui-modal-success').length).toBe(
        1
      );
    });
  });

  describe('event', () => {
    it('should handle onCancel Event', () => {
      const onCancel = jest.fn();

      const reactWarpper = shallow(<Modal visible onCancel={onCancel} />);

      reactWarpper.find('.code-ui-dialog-cancel').simulate('click');

      expect(onCancel).toBeCalled();
    });

    it('should handle onOk Event', () => {
      const onOk = jest.fn();

      const wrapper = shallow(<Modal visible onOk={onOk} />);

      wrapper.find('.code-ui-dialog-ok').simulate('click');

      expect(onOk).toBeCalled();
    });
  });
});
