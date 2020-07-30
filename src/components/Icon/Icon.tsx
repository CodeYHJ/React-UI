import React, { SVGAttributes } from 'react';
import { classPre } from "@utils/index";
import "./index.less";
export interface IconProps extends SVGAttributes<SVGElement> {
    className?: string;
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