import React, { useContext, useEffect, useMemo, cloneElement, ReactElement } from 'react';

import { classPre } from '@lib/utils';

import './FormItem.less'
import { FormItemProvider, FormItemContext } from './FormItemContext';
type ruleProps = { require: boolean, message: string }
export interface FormItemProps {
    require?: [ruleProps],
    label: string,
}
const c = classPre('formItem')

const FormItem: React.SFC<FormItemProps> = (props) => {

    const { formItemStore, dispatchForFormItem } = useContext(FormItemContext)

    const isPass = useMemo(() => {
        return true
    }, [])

    useEffect(() => {
        console.log(formItemStore, 'formItemStore')

    }, [formItemStore])

    return (
        <div className={c()}>
            <div className={c('itemBox')}>
                <span className={c('label')}>{props.label}</span>
                <FormItemProvider>
                    {cloneElement(props.children as ReactElement, { error: false })}
                </FormItemProvider>
            </div>
        </div>

    );
}

export default FormItem;