import React, { CSSProperties, HtmlHTMLAttributes } from 'react';
import './style/index.less';
export interface TransitionProps extends HtmlHTMLAttributes<HTMLDivElement> {
    visible: boolean;
    enter: CSSProperties;
    leave: CSSProperties;
    beforeEnter?: CSSProperties;
    time: number;
    opencb?: () => void;
    closecb?: () => void;
}
declare const Transition: React.SFC<TransitionProps> & {
    defaultProps: typeof defaultProps;
};
declare const defaultProps: {
    time: number;
};
export default Transition;
