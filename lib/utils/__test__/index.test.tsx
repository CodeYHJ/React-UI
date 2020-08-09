import { classPre } from "../index";
describe("classPre", () => {
    it('must be return Function', () => {
        const c = classPre()
        expect(c).toBeInstanceOf(Function)
    })
    it('must be return code-ui', () => {
        const c = classPre()()
        expect(c).toBe('code-ui')
    })
    it('must be return code-ui-test', () => {
        const c = classPre()
        expect(c('test')).toBe('code-ui-test')
    })
})