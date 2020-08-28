const generateIconInfoTemplete = (svgComponent, content) => {
  const str = `
import { SvgInfo } from "../svgInfo"

const ${svgComponent}: SvgInfo =  ${content};

export default  ${svgComponent};

`;

  return str;
};
const generateIconIndexTemplete = (iconList) => {
  const str = `

  import I from './localIcon'

  import c from './createIcon'
  
  type IconType = typeof I & { createIcon: typeof c }
  
  const Icon = I as IconType
  
  Icon.createIcon = c

  ${iconList}
  
  export default Icon

  `;

  return str;
};

const generateIconBaseTemplete = (tsName, componentName) => {
  const str = `

  import React, { SVGAttributes } from 'react';

  import info from '../iconInfo/${tsName}Info'
  
  import { classPre } from '@com/utils';
  
  export interface ${componentName}Props extends SVGAttributes<SVGElement> {
  
  }
  const c = classPre("svg")
  
  const ${componentName}: React.SFC<${componentName}Props> = (props) => {
  
      const { className, ...others } = props
  
      const cls = [c(), className].filter(Boolean).join(" ")
  
      return React.createElement('svg', { ...info.attributes, className: cls, ...others }, React.createElement('path', { d: info.path }))
  }
  
  export default ${componentName};

  `;

  return str;
};
const generateIconExportTemplete = (iconName) => {
  const str = `
  export { default as ${iconName} } from "./svgIcon/${iconName}"\n
  `;
  return str;
};
module.exports = {
  generateIconInfoTemplete,
  generateIconIndexTemplete,
  generateIconBaseTemplete,
  generateIconExportTemplete,
};
