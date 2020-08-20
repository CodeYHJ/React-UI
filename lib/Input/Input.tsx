import React, { HtmlHTMLAttributes, ReactNode, useState, useRef, useContext } from 'react';

import { classPre } from '@lib/utils';

import './input.less'

export interface InputProps extends HtmlHTMLAttributes<HTMLInputElement> {
    value?: string
    defaultValue?: string
    placeholder?: string
    disabled?: boolean
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
    preIconFix?: ReactNode
    sufIconFix?: ReactNode
    preStrFix?: string
    sufStrFix?: string
    error?: boolean
    type?: 'text' | 'password' | 'number',
    name?: string
}
const c = classPre('input')

const Input: React.SFC<InputProps> = (props) => {

    const { className, value, defaultValue, placeholder, onChange, onFocus, onBlur, preIconFix, sufIconFix, preStrFix, sufStrFix, disabled, error, name, type, ...others } = props
    const InputBase = (cls: string) => {
        let localDisabled = false
        if (!error && disabled) {
            localDisabled = true
        }
        return (<input ref={inputRef} {...others} defaultValue={props.defaultValue} className={cls} value={props.value} onChange={handleOnChange} onFocus={handleOnFocus} onBlur={handleOnBlur} disabled={localDisabled} placeholder={placeholder} type={type} />)
    }

    let baseInputCls = c('inputLabel')

    const [focus, setFocus] = useState(false)

    const inputRef = useRef<HTMLInputElement>(null)

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
    }
    const handleOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        if (!error && (preIconFix || sufIconFix)) {
            setFocus(true)
        }
        onFocus && onFocus(e)
    }
    const handleOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        if (!error && (preIconFix || sufIconFix)) {
            setFocus(false)
        }
        onBlur && onBlur(e)
    }

    const handleToFocus = (e: React.MouseEvent<HTMLElement>) => {
        if (disabled) return;
        if (inputRef.current !== null) {
            inputRef.current.focus()
        }
    }

    if (preIconFix && sufIconFix) {
        let cls = [c('allIconFix'), className].filter(Boolean).join(' ')
        if (error) {
            cls = `${cls} ${c("iconError")}`
        }
        else if (disabled) {
            cls = `${cls} ${c("iconDisabled")}`
        }
        const addCls = `${cls} ${c('focus')}`

        return (
            <span className={focus ? addCls : cls} onClick={handleToFocus}>
                <span className={c('icon')}>
                    {preIconFix}
                </span>
                {InputBase(baseInputCls)}
                <span className={c('icon')} onClick={handleToFocus}>
                    {sufIconFix}
                </span>
            </span>
        );
    }
    else if (preStrFix && sufStrFix) {
        let cls = [c('allStrFix'), className].filter(Boolean).join(' ')
        if (error) {
            cls = `${cls} ${c("strError")}`
        }
        else if (disabled) {
            cls = `${cls} ${c("strDisabled")}`
        }
        const addCls = `${cls} ${c('focus')}`
        return (
            <span className={focus ? addCls : cls} onClick={handleToFocus}>
                <span className={c('str')}>
                    {preStrFix}
                </span>
                {InputBase(baseInputCls)}
                <span className={c('str')} onClick={handleToFocus}>
                    {sufStrFix}
                </span>
            </span>
        );
    }
    else if (preIconFix) {
        let cls = [c('preIconFix'), className].filter(Boolean).join(' ')
        if (error) {
            cls = `${cls} ${c("iconError")}`
        }
        else if (disabled) {
            cls = `${cls} ${c("iconDisabled")}`
        }
        const addCls = `${cls} ${c('focus')}`
        return (
            <span className={focus ? addCls : cls}>
                <span className={c('icon')} onClick={handleToFocus}>
                    {preIconFix}
                </span>
                {InputBase(baseInputCls)}
            </span>
        );
    } else if (sufIconFix) {
        let cls = [c('sufIconFix'), className].filter(Boolean).join(' ')
        if (error) {
            cls = `${cls} ${c("iconError")}`
        }
        else if (disabled) {
            cls = `${cls} ${c("iconDisabled")}`
        }
        const addCls = `${cls} ${c('focus')}`
        return (
            <span className={focus ? addCls : cls}>
                {InputBase(baseInputCls)}
                <span className={c('icon')} onClick={handleToFocus}>
                    {sufIconFix}
                </span>
            </span>
        );
    } else if (preStrFix) {
        let cls = [c('preStrFix'), className].filter(Boolean).join(' ')
        if (error) {
            cls = `${cls} ${c("strError")}`
        }
        else if (disabled) {
            cls = `${cls} ${c("strDisabled")}`
        }
        const addCls = `${cls} ${c('focus')}`
        return (
            <span className={focus ? addCls : cls}>
                <div className={c('str')} onClick={handleToFocus}>
                    {preStrFix}
                </div>
                {InputBase(baseInputCls)}
            </span>
        );
    }
    else if (sufStrFix) {
        let cls = [c('sufStrFix'), className].filter(Boolean).join(' ')
        if (error) {
            cls = `${cls} ${c("strError")}`
        }
        else if (disabled) {
            cls = `${cls} ${c("strDisabled")}`
        }
        const addCls = `${cls} ${c('focus')}`
        return (
            <span className={focus ? addCls : cls}>
                {InputBase(baseInputCls)}
                <div className={c('str')} onClick={handleToFocus}>
                    {sufStrFix}
                </div>
            </span>
        );
    }
    else {
        baseInputCls = [baseInputCls, className].filter(Boolean).join(' ')
        if (error) {
            baseInputCls = `${baseInputCls} ${c("error")}`
        }
        else if (disabled) {
            baseInputCls = `${baseInputCls} ${c("baseDisabled")}`
        }
        return InputBase(baseInputCls)
    }

}

Input.defaultProps = {
    disabled: false,
    error: false,
    type: 'text'
}

export default Input;