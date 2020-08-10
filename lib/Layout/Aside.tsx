import React, { HtmlHTMLAttributes } from 'react';
import { classPre } from '@lib/utils';
export interface AsideProps extends HtmlHTMLAttributes<HTMLElement> {

}
const c = classPre('layout-aside')

const Aside: React.SFC<AsideProps> = (props) => {
    const { className, ...others } = props
    const cls = [c(), className].filter(Boolean).join(' ')
    return (
        <aside className={cls} {...others}>
            <div className={c('children')}>
                {props.children}

            </div>
        </aside>
    );
}

export default Aside;