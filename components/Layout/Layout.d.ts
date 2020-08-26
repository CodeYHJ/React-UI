import React, { HtmlHTMLAttributes, ReactElement } from 'react';
import './style/index.less';
import Aside from './Aside';
import Content from './Content';
import Footer from './Footer';
declare type LayoutChildrenType = typeof Aside | typeof Content | typeof Footer | typeof Layout;
export interface LayoutProps extends HtmlHTMLAttributes<HTMLElement> {
    children: ReactElement<LayoutChildrenType> | Array<ReactElement<LayoutChildrenType>>;
}
declare const Layout: React.SFC<LayoutProps>;
export default Layout;
