import Modal from ".."
import renderer from "react-test-renderer"
import { mount } from "enzyme"

describe('Modal', () => {
    it('renders a `.code-ui-modal-main`', () => {
        Modal.main({ mainText: 'test' })
        expect(document.querySelectorAll('.code-ui-modal-main').length).toBe(1)
    })
    it('renders a `.code-ui-modal-danger`', () => {
        Modal.danger({ mainText: 'test' })
        expect(document.querySelectorAll('.code-ui-modal-danger').length).toBe(1)
    })
    it('renders a `.code-ui-modal-warn`', () => {
        Modal.warn({ mainText: 'test' })
        expect(document.querySelectorAll('.code-ui-modal-warn').length).toBe(1)
    })
    it('renders a `.code-ui-modal-safe`', () => {
        Modal.safe({ mainText: 'test' })
        expect(document.querySelectorAll('.code-ui-modal-safe').length).toBe(1)
    })
})