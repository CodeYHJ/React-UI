import React, { HtmlHTMLAttributes } from 'react';
import { classPre } from '@lib/utils';
export interface FooterProps extends HtmlHTMLAttributes<HTMLElement> {

}
const c = classPre('layout-footer')

const Footer: React.SFC<FooterProps> = (props) => {
    const { className, ...others } = props
    const cls = [c(), className].filter(Boolean).join(' ')
    return (
        <div className={cls} {...others}>
            {props.children}
        </div>
    );
}

export default Footer;