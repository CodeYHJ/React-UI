import React from 'react';

import { classPre } from '@lib/utils';

import './FormItem.less'
import { FormItemProvider } from './FormItemContext';
// type ruleProps = [require]
export interface FormItemProps {
    require?: boolean,
    label: string,
}
const c = classPre('formItem')

const FormItem: React.SFC<FormItemProps> = (props) => {
    return (
        <div className={c()}>
            <div className={c('itemBox')}>
                <span className={c('label')}>{props.label}</span>
                <FormItemProvider>
                    {props.children}
                </FormItemProvider>
            </div>
        </div>
    );
}
FormItem.defaultProps = {
    require: false
}
export default FormItem;