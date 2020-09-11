import React, { SVGAttributes } from 'react';

import { classPre } from '@com/utils';

import info from '../iconInfo/dangerInfo';

import '../style/index.less';

// eslint-disable-next-line prettier/prettier
  export interface DangerIconProps extends SVGAttributes<SVGElement> {}

const c = classPre('svg');

const DangerIcon: React.FunctionComponent<DangerIconProps> = (props) => {
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

export default DangerIcon;
