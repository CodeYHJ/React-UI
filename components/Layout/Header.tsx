import React, { HtmlHTMLAttributes } from 'react';
import { classPre } from "@com/utils"

export interface HeraderProps extends HtmlHTMLAttributes<HTMLElement> {

}
const c = classPre('layout-header')

const Herader: React.SFC<HeraderProps> = (props) => {
    const { className, ...others } = props
    const cls = [c(), className].filter(Boolean).join(' ')
    return (
        <header className={cls} {...others}>
            {props.children}
        </header>
    );
}

export default Herader;