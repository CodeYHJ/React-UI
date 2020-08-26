import React, { HtmlHTMLAttributes, ReactElement } from 'react';
import './style/Row.less';
import Col from './Col';
export interface RowProps extends HtmlHTMLAttributes<HTMLDivElement> {
    justify?: "start" | "end" | "center" | "space-around" | "space-between";
    gutter?: number | number[];
    align?: "top" | "middle" | "bottom";
    children: ReactElement<typeof Col> | Array<ReactElement<typeof Col>>;
}
declare const Row: React.SFC<RowProps>;
export default Row;
