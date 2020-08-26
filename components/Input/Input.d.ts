import React, { HtmlHTMLAttributes, ReactNode } from 'react';
import './style/input.less';
export interface InputProps extends HtmlHTMLAttributes<HTMLInputElement> {
    value?: string;
    defaultValue?: string;
    placeholder?: string;
    disabled?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    preIconFix?: ReactNode;
    sufIconFix?: ReactNode;
    preStrFix?: string;
    sufStrFix?: string;
    error?: boolean;
    type?: 'text' | 'password' | 'number';
    name?: string;
}
declare const Input: React.SFC<InputProps>;
export default Input;
