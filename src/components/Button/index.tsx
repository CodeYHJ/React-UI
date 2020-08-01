import React, { MouseEventHandler } from 'react';
import { classPre } from '@com/utils';
import "./index.less"

type ButtonType = 'main' | 'danger' | 'warn' | 'default' | 'safe'
export interface ButtonProps {
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