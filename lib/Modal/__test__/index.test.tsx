import Modal from ".."
import renderer from "react-test-renderer"
import { mount } from "enzyme"

describe('Modal', () => {
    it('renders a `.code-ui-modal-info`', () => {
        Modal.info({ mainText: 'test' })
        expect(document.querySelectorAll('.code-ui-modal-info').length).toBe(1)
    })
    it('renders a `.code-ui-modal-danger`', () => {
        Modal.error({ mainText: 'test' })
        expect(document.querySelectorAll('.code-ui-modal-danger').length).toBe(1)
    })
    it('renders a `.code-ui-modal-warn`', () => {
        Modal.warn({ mainText: 'test' })
        expect(document.querySelectorAll('.code-ui-modal-warn').length).toBe(1)
    })
    it('renders a `.code-ui-modal-success`', () => {
        Modal.success({ mainText: 'test' })
        expect(document.querySelectorAll('.code-ui-modal-success').length).toBe(1)
    })
})