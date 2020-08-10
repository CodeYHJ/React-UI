import React, { MouseEventHandler, HtmlHTMLAttributes, ReactNode } from 'react';
import "./index.less"
import { classPre } from '@lib/utils';
import { Icon } from '@lib/Icon';

type ButtonType = 'primary' | 'danger' | 'warn' | 'default' | 'success' | 'dashed'
export interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
    type?: ButtonType,
    className?: string,
    onClick?: MouseEventHandler,
    disabled?: boolean,
    pre?: ReactNode,
    loading?: boolean
}
const c = classPre('button')

const Button: React.SFC<ButtonProps> = (props) => {
    const { type = 'default', className, disabled, onClick, pre, loading, ...other } = props
    const defaultCls = [c(),c(type), className]
    if (disabled) {
        if (type === 'dashed') {
            defaultCls.push(c('dashed-disabled'))
        } else {
            defaultCls.push(c('disabled'))

        }
    }
    const cls = defaultCls.filter(Boolean).join(' ')
    const handleClick: MouseEventHandler = (e) => {
        if (!disabled) {
            onClick && onClick(e)
        }
    }
    const loadingSvg = () => {
        return (
            <div className={c('loading')}>
                <Icon name="loading"></Icon>
            </div>
        )
    }
    const renderIcon = () => {
        if(disabled)return null
        if (loading) {
            return loadingSvg()
        } else {
            return pre ? (
                <div className={c('preIcon')}>
                    {pre}
                </div>
            ) : null
        }
    }
    return (
        <button className={cls} onClick={handleClick} {...other}>
            {renderIcon()}
            <span>{props.children}</span>
        </button>
    );
}

export default Button;