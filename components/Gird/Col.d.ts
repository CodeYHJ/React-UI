import React, { HtmlHTMLAttributes } from 'react';
import "./style/Col.less";
declare type Num = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24;
export interface ColProps extends HtmlHTMLAttributes<HTMLDivElement> {
    span?: Num;
    offset?: Num;
    sm?: Num;
    md?: Num;
    lg?: Num;
    xl?: Num;
}
declare const Col: React.SFC<ColProps>;
export default Col;
