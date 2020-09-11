import React, { HtmlHTMLAttributes } from 'react';

import { classPre } from '@com/utils';

// eslint-disable-next-line prettier/prettier
export interface FooterProps extends HtmlHTMLAttributes<HTMLElement> { }

const c = classPre('layout-footer');

const Footer: React.FunctionComponent<FooterProps> = (props) => {
  const { className, children, ...others } = props;

  const cls = [c(), className].filter(Boolean).join(' ');

  return (
    <footer className={cls} {...others}>
      {children}
    </footer>
  );
};

export default Footer;
