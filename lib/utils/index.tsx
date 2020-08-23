import { RuleType } from "@lib/Form/FormItem"

export const classPre = (pre?: string | number) => {
    if (pre && typeof pre === 'number') {
        pre = String(pre)
    }
    const preClass = ['code-ui', pre].filter(Boolean).join('-')
    return function (className?: string | number) {
        if (pre && typeof pre === 'number') {
            pre = String(pre)
        }
        return [preClass, className].filter(Boolean).join('-')
    }
}

export const verification = (value: string | number, rule: RuleType, message: string) => {
    const baseResult = {
        err: false,
        message,
    }
    const valueStr = String(value)
    if (rule.type === 'text' || rule.type === 'number') {
        const length = valueStr.length;
        const { len, max, min } = rule
        if (length > len || length > max) {
            return { ...baseResult, ...{ err: true } }
        }
        if (length < min) {
            return { ...baseResult, ...{ err: true } }
        }
    } else if (rule.type === 'email') {
        const reg = /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g
        return { ...baseResult, ...{ err: reg.test(valueStr) } }
    } else if (rule.type === 'phone') {
        const reg = /^1[34578]\d{9}$/g
        return { ...baseResult, ...{ err: reg.test(valueStr) } }
    }
    return baseResult
}
export const hasOwn = (target: Object, key: string) => {
    return Object.prototype.hasOwnProperty.call(target, key)
}