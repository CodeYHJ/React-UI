

  import React, { SVGAttributes } from 'react';

  import info from '../iconInfo/successInfo'
  
  import { classPre } from '@com/utils';
  
  export interface SuccessIconProps extends SVGAttributes<SVGElement> {
  
  }
  const c = classPre("svg")
  
  const SuccessIcon: React.SFC<SuccessIconProps> = (props) => {
  
      const { className, ...others } = props
  
      const cls = [c(), className].filter(Boolean).join(" ")
  
      return React.createElement('svg', { ...info.attributes, className: cls, ...others }, React.createElement('path', { d: info.path }))
  }
  
  export default SuccessIcon;

  