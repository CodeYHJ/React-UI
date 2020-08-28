

  import React, { SVGAttributes } from 'react';

  import info from '../iconInfo/UserIcon'
  
  import { classPre } from '@com/utils';
  
  export interface UserIconProps extends SVGAttributes<SVGElement> {
  
  }
  const c = classPre("svg")
  
  const UserIcon: React.SFC<UserIconProps> = (props) => {
  
      const { className, ...others } = props
  
      const cls = [c(), className].filter(Boolean).join(" ")
  
      return React.createElement('svg', { ...info.attributes, className: cls, ...others }, React.createElement('path', { d: info.path }))
  }
  
  export default UserIcon;

  