import { classPre, verification, hasOwn } from "../index";
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
describe('verification', () => {
    describe('check text', () => {
        it('check text length', () => {
            const rule = {
                type: 'text',
                len: 10,
            }
            const result = verification('12', rule, 'check text')
            const result1 = verification('12345678901', rule, 'check text')
            expect(result).toEqual({ err: false, message: 'check text' })
            expect(result1).toEqual({ err: true, message: 'check text' })

        })
        it('check text max', () => {
            const rule = {
                type: 'text',
                max: 6,
            }
            const resultMax = verification('1234567', rule, 'check text')
            const result = verification('123456', rule, 'check text')
            expect(result).toEqual({ err: false, message: 'check text' })
            expect(resultMax).toEqual({ err: true, message: 'check text' })
        })
        it('check text min', () => {
            const rule = {
                type: 'text',
                min: 3
            }
            const resultMin = verification('12', rule, 'check text')
            const result = verification('12345', rule, 'check text')
            expect(result).toEqual({ err: false, message: 'check text' })
            expect(resultMin).toEqual({ err: true, message: 'check text' })
        })
    })
    describe('check number', () => {
        it('check number length', () => {
            const rule = {
                type: 'number',
                len: 10,
            }
            const result = verification(12, rule, 'check number')
            const result1 = verification(12345678901, rule, 'check number')
            expect(result).toEqual({ err: false, message: 'check number' })
            expect(result1).toEqual({ err: true, message: 'check number' })

        })
        it('check number max', () => {
            const rule = {
                type: 'number',
                max: 6,
            }
            const resultMax = verification(1234567, rule, 'check number')
            const result = verification(123456, rule, 'check number')
            expect(result).toEqual({ err: false, message: 'check number' })
            expect(resultMax).toEqual({ err: true, message: 'check number' })
        })
        it('check number min', () => {
            const rule = {
                type: 'number',
                min: 3
            }
            const resultMin = verification(12, rule, 'check number')
            const result = verification(12345, rule, 'check number')
            expect(result).toEqual({ err: false, message: 'check number' })
            expect(resultMin).toEqual({ err: true, message: 'check number' })
        })
    })
    describe('email', () => {
        it('check email success', () => {
            const rule = {
                type: 'email',
            }
            const result = verification('abc@gmail.com', rule, 'check email')
            expect(result).toEqual({ err: false, message: 'check email' })

        })
        it('check email fail', () => {
            const rule = {
                type: 'email',
            }
            const result = verification('abc@gmail.ccom', rule, 'check email')
            expect(result).toEqual({ err: true, message: 'check email' })

        })
    })
    describe('phone', () => {
        it('check phone success', () => {
            const rule = {
                type: 'phone',
            }
            const result = verification(13725339871, rule, 'check email')
            expect(result).toEqual({ err: false, message: 'check email' })

        })
        it('check phone fail', () => {
            const rule = {
                type: 'phone',
            }
            const result = verification(1234567890, rule, 'check phone')
            expect(result).toEqual({ err: true, message: 'check phone' })

        })
    })
})

describe('hasOwn', () => {
    it('check hasOwn', () => {
        const result = hasOwn({ a: 1 }, 'a')
        expect(result).toBe(true)
    })
})