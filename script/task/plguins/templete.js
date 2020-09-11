const generateIconInfoTemplete = (svgComponent, content) => {
  const str = `
/* eslint-disable max-len */

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

  export * from './svgIcon'

  type IconType = typeof I & { createIcon: typeof c }

  const Icon = I as IconType

  Icon.createIcon = c

  export default Icon

  `;

  return str;
};

const generateIconBaseTemplete = (tsName, componentName) => {
  const str = `

  import React, { SVGAttributes } from 'react';

  import info from '../iconInfo/${tsName}Info'

  import { classPre } from '@com/utils';

  import "../style/index.less";

  // eslint-disable-next-line prettier/prettier
  export interface ${componentName}Props extends SVGAttributes<SVGElement> {}

  const c = classPre("svg")

  const ${componentName}: React.FunctionComponent<${componentName}Props> = (props) => {

      const { className, ...others } = props

      const cls = [c(), className].filter(Boolean).join(" ")

      const childrenList = info.path.map(d => React.createElement('path', { d ,key:info.attributes.key+d}))

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
