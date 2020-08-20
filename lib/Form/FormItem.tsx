import React, { useContext, useEffect, useMemo, cloneElement, ReactElement, memo, useState, Children, useRef, useCallback } from 'react';

import { classPre, verification } from '@lib/utils';

import './FormItem.less'
import { FormItemProvider, FormItemContext } from './FormItemContext';
import Input, { InputProps } from '@lib/Input/Input';
import FormItemInput from './FormItemInput';
export type RuleType = {
    type: 'text',
    len: number,
    max: number,
    min: number
} | {
    type: 'number',
    len: number,
    max: number,
    min: number
} | {
    type: 'email',

} | {
    type: 'phone',
}
type validateTrigger = 'blur' | 'change'

type ruleProps = { require?: boolean, message: string, rule?: RuleType, trigger?: validateTrigger }

type Result = { err: boolean, message: string, num: number, reFreshFn?: () => void }

export interface FormItemProps {
    rule?: ruleProps,
    label: string,
    children: ReactElement<InputProps>
}
const c = classPre('formItem')

const isRequire = (rule: ruleProps | undefined) => {
    if (!rule) return false

    return rule.require ? true : false
}


const createHandleChildren = (children: ReactElement, resultRef: React.MutableRefObject<Result>, rule: ruleProps | undefined) => {
    return () => {
        const { props } = children
        const value = props.value
        if (rule && rule.rule) {
            resultRef.current = { ...resultRef.current, ...verification(value, rule.rule, rule.message) }
            resultRef.current.reFreshFn && resultRef.current.reFreshFn()
        }
    }
}

const mergerEvent = (children: ReactElement, cb?: Function) => {
    const { props } = children
    const childProps: any = {}
    const cachBlur = props.onBlur ? props.onBlur : () => { }
    childProps.onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        cachBlur(e)
        cb && cb()
    }
    return childProps
}

const FormItem: React.SFC<FormItemProps> = (props) => {
    const [reFresh, setReFresh] = useState({})
    const resultRef = useRef<Result>({
        err: false,
        message: '',
        reFreshFn: () => setReFresh({}),
        num: 0
    })
    const { rule = { require: false, message: '', rule: undefined, trigger: 'change' } } = props

    const hasRequire = isRequire(rule)

    const labelCls = hasRequire ? [c('label'), c('label-require')].join(' ') : c('label')

    const childProps = useMemo(() => {
        const handleChildren = createHandleChildren(props.children, resultRef, rule)

        if (!rule.trigger || rule.trigger === 'change') {
            resultRef.current.num > 1 && handleChildren()
            resultRef.current.num += 1
            return { ...props.children.props }
        } else {
            return mergerEvent(props.children, handleChildren)
        }

    }, [props.children.props.value])

    let result = resultRef.current

    childProps.error = resultRef.current.err

    useEffect(() => {
        if (!rule.trigger || rule.trigger === 'change') {
            resultRef.current.num = 0
        }
    }, [reFresh])
    return (
        <div className={c()} >
            <div className={c('itemBox')}>
                <span className={labelCls}>{props.label}</span>
                <FormItemInput errorVisible={result.err} message={result.message}>
                    {cloneElement(props.children as ReactElement, childProps)}
                </FormItemInput>
            </div>
        </div>

    );
}

export default FormItem;