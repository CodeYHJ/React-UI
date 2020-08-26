import React, { HtmlHTMLAttributes } from 'react';
import { classPre } from '@com/utils';
import "./style/Col.less";
type Num = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24
export interface ColProps extends HtmlHTMLAttributes<HTMLDivElement> {
    span?: Num
    offset?: Num
    sm?: Num
    md?: Num
    lg?: Num
    xl?: Num
}
const c = classPre('col')

const Col: React.SFC<ColProps> = (props) => {
    const { className, span = 24, style = {}, offset = 0, sm = 0, md = 0, lg = 0, xl = 0 } = props
    const colSpan = c(span)
    let offsetClass, smClass, mdClass, lgClass, xlClass;
    if (offset) {
        offsetClass = c(`offset-${offset}`)
    }
    // > 576px 
    if (sm) {
        smClass = c(`sm-${sm}`)
    }
    // > 768px 
    if (md) {
        mdClass = c(`md-${md}`)
    }
    // > 992px 
    if (lg) {
        lgClass = c(`lg-${lg}`)
    }
    // > 1200px
    if (xl) {
        xlClass = c(`xl-${xl}`)
    }
    let cls = [c(), colSpan, offsetClass, , smClass, mdClass, lgClass, xlClass, className].filter(Boolean).join(" ")

    return (
        <div className={cls} style={style}>{props.children}</div>
    );
}

export default Col;