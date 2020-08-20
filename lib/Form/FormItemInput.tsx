import React, { HtmlHTMLAttributes, memo } from 'react';
import { classPre } from '@lib/utils';
import "./FormItemInput.less"
import Transition from '@lib/Transition';
export interface FormItemInputProps extends HtmlHTMLAttributes<HTMLDivElement> {
    errorVisible: boolean,
    message: string
}
const c = classPre('formItemInput')
const FormItemInput: React.SFC<FormItemInputProps> = (props) => {
    const { errorVisible = false, message } = props
    const cls = [c(), props.className].filter(Boolean).join(' ')
    console.log("input",props)
    return (
        <div className={cls} >
            <div className={c('input')}>
                {props.children}
            </div>
            <Transition visible={errorVisible} enter={{ visibility: "visible", opacity: 1 }} leave={{ visibility: 'hidden', opacity: 0 }} >
                <div className={c('checkTip')}>{message}</div>
            </Transition>
        </div>

    );
}

export default memo(FormItemInput);