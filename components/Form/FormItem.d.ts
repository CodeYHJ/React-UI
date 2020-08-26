import React, { ReactElement } from 'react';
import './style/FormItem.less';
import { FormInstance } from './hook/useForm';
export declare type RuleType = {
    type: string;
    len?: number;
    max?: number;
    min?: number;
};
declare type validateTrigger = 'blur' | 'change';
declare type ruleProps = {
    require?: boolean;
    message: string;
    formatterRule?: RuleType;
    trigger?: validateTrigger;
};
export declare type Result = {
    err: boolean;
    message: string;
};
export interface FormItemProps {
    rule?: ruleProps;
    label: string;
    children: ReactElement;
    form?: FormInstance;
}
declare const FormItem: React.SFC<FormItemProps>;
export default FormItem;
