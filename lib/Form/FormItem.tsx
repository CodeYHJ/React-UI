import React, { useContext, useMemo, cloneElement, ReactElement, useState, useRef } from 'react';
import { classPre, verification, hasOwn } from '@lib/utils';
import './FormItem.less'
import { InputProps } from '@lib/Input/Input';
import FormItemInput from './FormItemInput';
import { FormContext } from './FormContext';
import { FormInstance } from './hook/useForm';
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

type ruleProps = { require?: boolean, message: string, formatterRule?: RuleType, trigger?: validateTrigger }

export type Result = { err: boolean, message: string }

export interface FormItemProps {
    rule?: ruleProps,
    label: string,
    children: ReactElement,
    form?: FormInstance
}
const c = classPre('formItem')

const isRequire = (rule: ruleProps | undefined) => {
    if (!rule) return false

    return rule.require ? true : false
}


const createCallBack = (...args: any[]) => {
    const cb = args.splice(args.length - 1, 1)[0]
    return (e: any) => {
        cb(e, ...args)
    }
}

const mergerEvent = (props: any, evenName: string, cb: Function) => {
    if (!props[evenName]) {
        props[evenName] = (e: any) => cb(e)
    } else {
        const cachFn = props[evenName]
        props[evenName] = (e: any) => {
            cachFn(e)
            cb(e)
        }
    }
}
const isTargetEl = (children: ReactElement<InputProps>) => {

    const { props } = children

    return hasOwn(props, 'name') && hasOwn(props, 'error')
}
const verFn = (inputValue: string | number, inputName: string, formRef: FormInstance, rule: ruleProps) => {
    formRef.current.data[inputName] = { value: inputValue, formatterRule: rule.formatterRule, ...verification(inputValue, rule.formatterRule as RuleType, rule.message) }
}

const FormItem: React.SFC<FormItemProps> = (props) => {
    const { dispatchForForm } = useContext(FormContext)

    const hasRequire = isRequire(props.rule)

    const labelCls = hasRequire ? [c('label'), c('label-require')].join(' ') : c('label')

    let childProps = { ...props.children.props }

    let result = {
        err: false,
        message: '',
    }

    if (isTargetEl(props.children) && props.rule) {

        const { rule = { require: false, message: '', formatterRule: undefined, trigger: 'change' }, children: inputChildren } = props

        const form = props.form as FormInstance

        const inputProps = inputChildren.props;

        const { value: inputValue, name: inputName } = inputProps

        childProps = { ...inputProps }

        useMemo(() => {
            if (!rule.trigger || rule.trigger === 'change') {
                const changeCallBack = (e: React.ChangeEvent<HTMLInputElement>, form: FormInstance, rule: ruleProps) => {
                    verFn(e.target.value, inputName, form, rule)
                    dispatchForForm({ type: 'UPDATE', playload: { [inputName]: { value: e.target.value, isErr: form.current.data[inputName].err } } })
                }
                const cb = createCallBack(form, rule, changeCallBack)
                mergerEvent(childProps, 'onChange', cb)
            } else if (rule.trigger === 'blur') {
                const blurCallBack = (e: React.FocusEvent<HTMLInputElement>, form: FormInstance, rule: ruleProps) => {
                    verFn(e.target.value, inputName, form, rule)
                    dispatchForForm({ type: 'UPDATE', playload: { [inputName]: { value: e.target.value, isErr: form.current.data[inputName].err } } })
                }
                const cb = createCallBack(form, rule, blurCallBack)
                mergerEvent(childProps, 'onBlur', cb)
            }
        }, [inputValue])

        if (hasOwn(form.current.data, inputName)) {
            childProps.error = form.current.data[inputName].err
            result.err = form.current.data[inputName].err
            result.message = form.current.data[inputName].message
        }

    } else {

    }


    return (
        <div className={c()} >
            <div className={c('itemBox')}>
                <span className={labelCls}>{props.label}</span>
                <FormItemInput errorVisible={
                    result.err
                } message={result.message} >
                    {cloneElement(props.children as ReactElement, childProps)}
                </FormItemInput>
            </div>
        </div>

    );
}


export default FormItem;