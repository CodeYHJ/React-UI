import React, { HtmlHTMLAttributes } from 'react';
import "./style/FormItemInput.less";
export interface FormItemInputProps extends HtmlHTMLAttributes<HTMLDivElement> {
    errorVisible: boolean;
    message: string;
}
declare const _default: React.NamedExoticComponent<FormItemInputProps>;
export default _default;
