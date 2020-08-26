import React, { SVGAttributes } from 'react';
import "./importAll";
import "./style/index.less";
export interface IconProps extends SVGAttributes<SVGElement> {
    name: string;
}
declare const Icon: React.SFC<IconProps>;
export default Icon;
