

  import React, { SVGAttributes } from 'react';

  import info from '../iconInfo/arrorDownInfo'
  
  import { classPre } from '@com/utils';
  
  export interface ArrorDownIconProps extends SVGAttributes<SVGElement> {
  
  }
  const c = classPre("svg")
  
  const ArrorDownIcon: React.SFC<ArrorDownIconProps> = (props) => {
  
      const { className, ...others } = props
  
      const cls = [c(), className].filter(Boolean).join(" ")
  
      return React.createElement('svg', { ...info.attributes, className: cls, ...others }, React.createElement('path', { d: info.path }))
  }
  
  export default ArrorDownIcon;

  