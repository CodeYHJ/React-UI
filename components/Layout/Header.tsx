import React, { HtmlHTMLAttributes } from 'react';

import { classPre } from '@com/utils';

// eslint-disable-next-line prettier/prettier
export interface HeraderProps extends HtmlHTMLAttributes<HTMLElement> { }

const c = classPre('layout-header');

const Herader: React.FunctionComponent<HeraderProps> = (props) => {
  const { className, children, ...others } = props;

  const cls = [c(), className].filter(Boolean).join(' ');

  return (
    <header className={cls} {...others}>
      {children}
    </header>
  );
};

export default Herader;
