import React, { ReactElement, useEffect, useContext, cloneElement, ReactNode } from 'react';
import { classPre } from '@com/utils';
import './style/Form.less'
import FormItem, { FormItemProps } from './FormItem';
import { FormProvider, InitValue, FormContext } from './FormContext';
import { FormInstance, useForm } from './hook/useForm';

export interface FormProps {
    children: ReactElement<typeof FormItem>[] | ReactElement<typeof FormItem>,
    form?: FormInstance
}

const c = classPre('form')

const Form: React.SFC<FormProps> & { userForm: typeof useForm } = (props) => {

    const localForm = useForm(props.form)
    const list = () => {
        if (Array.isArray(props.children)) {
            return (props.children as ReactNode[]).map((el,index) => {
                return cloneElement(el as ReactElement, {key:index, form: localForm })
            })
        }
        return cloneElement(props.children, { form: localForm })
    }
    return (
        <form className={c()} onSubmit={(e) => e.preventDefault()}>
            <FormProvider>
                {list()}
            </FormProvider>
        </form>
    );
}

Form.userForm = useForm

export default Form;