import React, { SVGAttributes } from 'react';
import "./importAll"
import "./style/index.less";
import { classPre } from '@com/utils';
export interface IconProps extends SVGAttributes<SVGElement> {
    name: string
}
const c = classPre("svg")
const Icon: React.SFC<IconProps> = (props) => {
    const { className, name, ...others } = props
    const cls = [c(), className].filter(Boolean).join(" ")
    return (
        <svg className={cls} {...others}>
            <use xlinkHref={`#${name}`}></use>
        </svg>
    );
}

export default Icon;