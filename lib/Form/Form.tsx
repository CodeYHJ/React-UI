import React, { ReactElement, useEffect, useContext } from 'react';
import { classPre } from '@lib/utils';
import './Form.less'
import FormItem, { FormItemProps } from './FormItem';
import { FormItemProvider, FormItemContext } from './FormItemContext';
export interface FormProps {
    children: ReactElement<typeof FormItem>[]
}

const c = classPre('form')

const Form: React.SFC<FormProps> = (props) => {




    return (
        <form className={c()}>
            <FormItemProvider>
                {props.children}
            </FormItemProvider>

        </form>
    );
}

export default Form;