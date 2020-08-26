import React, { MouseEventHandler, HtmlHTMLAttributes, ReactNode } from 'react';
import "./style/index.less";
declare type ButtonType = 'primary' | 'danger' | 'warn' | 'default' | 'success' | 'dashed';
export interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
    type?: ButtonType;
    className?: string;
    onClick?: MouseEventHandler;
    disabled?: boolean;
    pre?: ReactNode;
    loading?: boolean;
}
declare const Button: React.SFC<ButtonProps>;
export default Button;
