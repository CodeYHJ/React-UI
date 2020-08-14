import React, { PropsWithChildren, ReactElement } from 'react';

import { classPre } from '@lib/utils';
import './Form.less'
import FormItem, { FormItemProps } from './FormItem';
export interface FormProps {
    children: ReactElement<typeof FormItem>[]
}

const c = classPre('form')

const Form: React.SFC<FormProps> = (props) => {
    return (
        <form className={c()}>
            {props.children}
        </form>
    );
}

export default Form;