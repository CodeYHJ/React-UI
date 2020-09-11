import React, { HtmlHTMLAttributes } from 'react';

import { classPre } from '@com/utils';

// eslint-disable-next-line prettier/prettier
export interface AsideProps extends HtmlHTMLAttributes<HTMLElement> { }

const c = classPre('layout-aside');

const Aside: React.FunctionComponent<AsideProps> = (props) => {
  const { className, children, ...others } = props;

  const cls = [c(), className].filter(Boolean).join(' ');

  return (
    <aside className={cls} {...others}>
      <div className={c('children')}>{children}</div>
    </aside>
  );
};

export default Aside;
