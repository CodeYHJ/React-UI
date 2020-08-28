const generateTemplete = (svgComponent, content) => {
  const str = `
import {SvgInfo} from "../SvgInfo.ts"

const ${svgComponent}: SvgInfo =  ${content};

export default  ${svgComponent};`;

  return str;
};
module.exports = { generateTemplete };
