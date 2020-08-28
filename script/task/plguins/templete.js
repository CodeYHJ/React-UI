const generateIconInfoTemplete = (svgComponent, content) => {
  const str = `
import {SvgInfo} from "./SvgInfo.ts"

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

const generateIconBaseTemplete = (iconName) => {
  const str = `

  import React, { SVGAttributes } from 'react';

  import info from '../iconInfo/${iconName}'
  
  import { classPre } from '@com/utils';
  
  export interface ${iconName}Props extends SVGAttributes<SVGElement> {
  
  }
  const c = classPre("svg")
  
  const ${iconName}: React.SFC<${iconName}Props> = (props) => {
  
      const { className, ...others } = props
  
      const cls = [c(), className].filter(Boolean).join(" ")
  
      return React.createElement('svg', { ...info.attributes, className: cls, ...others }, React.createElement('path', { d: info.path }))
  }
  
  export default ${iconName};

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
