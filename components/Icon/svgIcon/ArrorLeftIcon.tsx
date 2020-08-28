

  import React, { SVGAttributes } from 'react';

  import info from '../iconInfo/ArrorLeftIcon'
  
  import { classPre } from '@com/utils';
  
  export interface ArrorLeftIconProps extends SVGAttributes<SVGElement> {
  
  }
  const c = classPre("svg")
  
  const ArrorLeftIcon: React.SFC<ArrorLeftIconProps> = (props) => {
  
      const { className, ...others } = props
  
      const cls = [c(), className].filter(Boolean).join(" ")
  
      return React.createElement('svg', { ...info.attributes, className: cls, ...others }, React.createElement('path', { d: info.path }))
  }
  
  export default ArrorLeftIcon;

  