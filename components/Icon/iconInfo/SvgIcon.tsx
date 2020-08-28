

  import React, { SVGAttributes } from 'react';

  import info from '../iconInfo/SvgIcon'
  
  import { classPre } from '@com/utils';
  
  export interface SvgIconProps extends SVGAttributes<SVGElement> {
  
  }
  const c = classPre("svg")
  
  const SvgIcon: React.SFC<SvgIconProps> = (props) => {
  
      const { className, ...others } = props
  
      const cls = [c(), className].filter(Boolean).join(" ")
  
      return React.createElement('svg', { ...info.attributes, className: cls, ...others }, React.createElement('path', { d: info.path }))
  }
  
  export default SvgIcon;

  