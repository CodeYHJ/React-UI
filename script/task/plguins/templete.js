const generateIconInfoTemplete = (svgComponent, content) => {
  const str = `
import { SvgInfo } from "../svgInfo"

const ${svgComponent}: SvgInfo =  ${content};

export default  ${svgComponent};

`;

  return str;
};
const greateSvgIconIndexTemplete = (content) => {
  const str = content;
  return str;
};
const generateIconIndexTemplete = () => {
  const str = `

  import I from './localIcon'

  import c from './createIcon'

  import *  as IconList from './svgIcon'
  
  type IconType = typeof I & { createIcon: typeof c } & typeof IconList
  
  const Icon = I as IconType
  
  Icon.createIcon = c

  Object.keys(IconList).reduce((pre: any, next: any) => {
    Icon[next] = IconList[next]
    return Icon;
  }, Icon)
  
  export default Icon

  `;

  return str;
};

const generateIconBaseTemplete = (tsName, componentName) => {
  const str = `

  import React, { SVGAttributes } from 'react';

  import info from '../iconInfo/${tsName}Info'

  import "../style/index.less";

  import { classPre } from '@com/utils';
  
  export interface ${componentName}Props extends SVGAttributes<SVGElement> {
  
  }
  const c = classPre("svg")
  
  const ${componentName}: React.SFC<${componentName}Props> = (props) => {
  
      const { className, ...others } = props
  
      const cls = [c(), className].filter(Boolean).join(" ")

      const childrenList = info.path.map((d,index) => React.createElement('path', { d ,key:index}))
  
      return React.createElement('svg', { ...info.attributes, className: cls, ...others }, childrenList)
  }
  
  export default ${componentName};

  `;

  return str;
};
const generateIconExportTemplete = (iconName) => {
  const str = `
  export { default as ${iconName} } from "./${iconName}"\n
  `;
  return str;
};
module.exports = {
  generateIconInfoTemplete,
  generateIconIndexTemplete,
  generateIconBaseTemplete,
  generateIconExportTemplete,
  greateSvgIconIndexTemplete,
};
