export const classPre = (pre?: string) => {
    const preClass = ['code-ui', pre].filter(Boolean).join('-')
    return function (className?: string) {
        return [preClass, className].filter(Boolean).join('-')
    }
}