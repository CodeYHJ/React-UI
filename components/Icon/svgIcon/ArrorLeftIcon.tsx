import React, { SVGAttributes } from 'react';

import { classPre } from '@com/utils';

import info from '../iconInfo/arrorLeftInfo';

import '../style/index.less';

// eslint-disable-next-line prettier/prettier
  export interface ArrorLeftIconProps extends SVGAttributes<SVGElement> {}

const c = classPre('svg');

const ArrorLeftIcon: React.FunctionComponent<ArrorLeftIconProps> = (props) => {
  const { className, ...others } = props;

  const cls = [c(), className].filter(Boolean).join(' ');

  const childrenList = info.path.map((d) =>
    React.createElement('path', { d, key: info.attributes.key + d })
  );

  return React.createElement(
    'svg',
    { ...info.attributes, className: cls, ...others },
    childrenList
  );
};

export default ArrorLeftIcon;
