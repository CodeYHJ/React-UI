import React, { MouseEventHandler, HtmlHTMLAttributes } from 'react';
import "./index.less"
import { classPre } from '@lib/utils';

type ButtonType = 'main' | 'danger' | 'warn' | 'default' | 'safe'
export interface ButtonProps extends HtmlHTMLAttributes<HTMLElement> {
    type?: ButtonType,
    className?: string,
    onClick?: MouseEventHandler
}
const c = classPre('button')

const Button: React.SFC<ButtonProps> = (props) => {
    const { type = 'default', className, ...other } = props
    const cls = [c(type), className].filter(Boolean).join(' ')
    return (
        <div className={cls} {...other}>
            <span>{props.children}</span>
        </div>
    );
}

export default Button;