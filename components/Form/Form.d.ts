import React, { ReactElement } from 'react';
import './style/Form.less';
import FormItem from './FormItem';
import { FormInstance, useForm } from './hook/useForm';
export interface FormProps {
    children: ReactElement<typeof FormItem>[] | ReactElement<typeof FormItem>;
    form?: FormInstance;
}
declare const Form: React.SFC<FormProps> & {
    userForm: typeof useForm;
};
export default Form;
