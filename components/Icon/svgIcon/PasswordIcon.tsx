

  import React, { SVGAttributes } from 'react';

  import info from '../iconInfo/passwordInfo'

  import "../style/index.less";

  import { classPre } from '@com/utils';
  
  export interface PasswordIconProps extends SVGAttributes<SVGElement> {
  
  }
  const c = classPre("svg")
  
  const PasswordIcon: React.SFC<PasswordIconProps> = (props) => {
  
      const { className, ...others } = props
  
      const cls = [c(), className].filter(Boolean).join(" ")
  
      return React.createElement('svg', { ...info.attributes, className: cls, ...others }, React.createElement('path', { d: info.path }))
  }
  
  export default PasswordIcon;

  