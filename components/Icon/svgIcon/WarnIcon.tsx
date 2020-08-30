

  import React, { SVGAttributes } from 'react';

  import info from '../iconInfo/warnInfo'

  import "../style/index.less";

  import { classPre } from '@com/utils';
  
  export interface WarnIconProps extends SVGAttributes<SVGElement> {
  
  }
  const c = classPre("svg")
  
  const WarnIcon: React.SFC<WarnIconProps> = (props) => {
  
      const { className, ...others } = props
  
      const cls = [c(), className].filter(Boolean).join(" ")

      const childrenList = info.path.map((d,index) => React.createElement('path', { d ,key:index}))
  
      return React.createElement('svg', { ...info.attributes, className: cls, ...others }, childrenList)
  }
  
  export default WarnIcon;

  