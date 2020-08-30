

  import React, { SVGAttributes } from 'react';

  import info from '../iconInfo/successInfo'

  import "../style/index.less";

  import { classPre } from '@com/utils';
  
  export interface SuccessIconProps extends SVGAttributes<SVGElement> {
  
  }
  const c = classPre("svg")
  
  const SuccessIcon: React.SFC<SuccessIconProps> = (props) => {
  
      const { className, ...others } = props
  
      const cls = [c(), className].filter(Boolean).join(" ")

      const childrenList = info.path.map((d,index) => React.createElement('path', { d ,key:index}))
  
      return React.createElement('svg', { ...info.attributes, className: cls, ...others }, childrenList)
  }
  
  export default SuccessIcon;

  