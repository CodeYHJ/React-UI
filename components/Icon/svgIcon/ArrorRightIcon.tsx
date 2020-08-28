

  import React, { SVGAttributes } from 'react';

  import info from '../iconInfo/ArrorRightIcon'
  
  import { classPre } from '@com/utils';
  
  export interface ArrorRightIconProps extends SVGAttributes<SVGElement> {
  
  }
  const c = classPre("svg")
  
  const ArrorRightIcon: React.SFC<ArrorRightIconProps> = (props) => {
  
      const { className, ...others } = props
  
      const cls = [c(), className].filter(Boolean).join(" ")
  
      return React.createElement('svg', { ...info.attributes, className: cls, ...others }, React.createElement('path', { d: info.path }))
  }
  
  export default ArrorRightIcon;

  