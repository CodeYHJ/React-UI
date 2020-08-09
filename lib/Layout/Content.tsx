import React, { HtmlHTMLAttributes } from 'react';
import { classPre } from '@lib/utils';
export interface ContentProps extends HtmlHTMLAttributes<HTMLElement> {

}
const c = classPre('layout-content')

const Content: React.SFC<ContentProps> = (props) => {
    const { className, ...others } = props
    const cls = [c(), className].filter(Boolean).join(' ')
    return (
        <main className={cls} {...others}>
            {props.children}
        </main>
    );
}

export default Content;