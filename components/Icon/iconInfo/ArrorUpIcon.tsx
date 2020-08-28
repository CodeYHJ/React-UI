

  import React, { SVGAttributes } from 'react';

  import info from '../iconInfo/ArrorUpIcon'
  
  import { classPre } from '@com/utils';
  
  export interface ArrorUpIconProps extends SVGAttributes<SVGElement> {
  
  }
  const c = classPre("svg")
  
  const ArrorUpIcon: React.SFC<ArrorUpIconProps> = (props) => {
  
      const { className, ...others } = props
  
      const cls = [c(), className].filter(Boolean).join(" ")
  
      return React.createElement('svg', { ...info.attributes, className: cls, ...others }, React.createElement('path', { d: info.path }))
  }
  
  export default ArrorUpIcon;

  