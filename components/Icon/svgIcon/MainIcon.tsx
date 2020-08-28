

  import React, { SVGAttributes } from 'react';

  import info from '../iconInfo/mainInfo'
  
  import { classPre } from '@com/utils';
  
  export interface MainIconProps extends SVGAttributes<SVGElement> {
  
  }
  const c = classPre("svg")
  
  const MainIcon: React.SFC<MainIconProps> = (props) => {
  
      const { className, ...others } = props
  
      const cls = [c(), className].filter(Boolean).join(" ")
  
      return React.createElement('svg', { ...info.attributes, className: cls, ...others }, React.createElement('path', { d: info.path }))
  }
  
  export default MainIcon;

  