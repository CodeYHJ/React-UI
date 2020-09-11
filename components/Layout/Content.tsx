import React, { HtmlHTMLAttributes } from 'react';

import { classPre } from '@com/utils';

// eslint-disable-next-line prettier/prettier
export interface ContentProps extends HtmlHTMLAttributes<HTMLElement> { }

const c = classPre('layout-content');

const Content: React.FunctionComponent<ContentProps> = (props) => {
  const { className, children, ...others } = props;

  const cls = [c(), className].filter(Boolean).join(' ');

  return (
    <main className={cls} {...others}>
      {children}
    </main>
  );
};

export default Content;
