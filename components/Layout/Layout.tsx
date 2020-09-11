import React, { HtmlHTMLAttributes, ReactElement } from 'react';

import { classPre } from '@com/utils';

import './style/index.less';

import Aside from './Aside';

import Content from './Content';

import Footer from './Footer';

type LayoutChildrenType =
  | typeof Aside
  | typeof Content
  | typeof Footer
  | typeof Layout;

type ChildrenType =
  | ReactElement<LayoutChildrenType>
  | Array<ReactElement<LayoutChildrenType>>;

export interface LayoutProps extends HtmlHTMLAttributes<HTMLElement> {
  children: ChildrenType;
}

const c = classPre('layout');

const Layout: React.FunctionComponent<LayoutProps> = (props) => {
  const { className, children, ...others } = props;

  let hasAside = false;

  if ((children as Array<ReactElement>).length) {
    (children as Array<ReactElement>).forEach((element) => {
      if (element.type === Aside) {
        hasAside = true;
      }
    });
  }

  const cls = hasAside
    ? [c(), c('hasAside'), className].filter(Boolean).join(' ')
    : [c(), className].filter(Boolean).join(' ');

  return (
    <div className={cls} {...others}>
      {children}
    </div>
  );
};

export default Layout;
