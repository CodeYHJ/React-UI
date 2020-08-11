import React, { HtmlHTMLAttributes, ReactElement } from 'react';
import { classPre } from "@lib/utils"
import './index.less'
import Aside from './Aside';
import Content from './Content';
import Footer from './Footer';
type LayoutChildrenType = typeof Aside | typeof Content | typeof Footer | typeof Layout
export interface LayoutProps extends HtmlHTMLAttributes<HTMLElement> {
    children: ReactElement<LayoutChildrenType> | Array<ReactElement<LayoutChildrenType>>
}
const c = classPre('layout')
const Layout: React.SFC<LayoutProps> = (props) => {
    const { className, children, ...others } = props
    let hasAside = false
    if ((children as Array<ReactElement>).length) {
        (children as Array<ReactElement>).forEach(element => {
            if (element.type === Aside) {
                hasAside = true
            }
        })
    }
    const cls = hasAside ? [c(), c('hasAside'), className].filter(Boolean).join(' ') : [c(), className].filter(Boolean).join(' ')

    return (
        <div className={cls} {...others}>
            {props.children}
        </div>
    );
}

export default Layout;