

  import React, { SVGAttributes } from 'react';

  import info from '../iconInfo/dangerInfo'

  import "../style/index.less";

  import { classPre } from '@com/utils';
  
  export interface DangerIconProps extends SVGAttributes<SVGElement> {
  
  }
  const c = classPre("svg")
  
  const DangerIcon: React.SFC<DangerIconProps> = (props) => {
  
      const { className, ...others } = props
  
      const cls = [c(), className].filter(Boolean).join(" ")
  
      return React.createElement('svg', { ...info.attributes, className: cls, ...others }, React.createElement('path', { d: info.path }))
  }
  
  export default DangerIcon;

  