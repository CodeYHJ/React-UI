import React, { MouseEventHandler, ReactNode, HtmlHTMLAttributes } from 'react';
import "./style/Dialog.less";
export interface DailogProps extends HtmlHTMLAttributes<HTMLElement> {
    visible: boolean;
    onOk?: MouseEventHandler;
    onCancel?: MouseEventHandler;
    maskClosable?: boolean;
    closable?: boolean;
    footer?: ReactNode;
    headerText?: string;
    okText?: string;
    cancelText?: string;
    opencb?: () => void;
    closecb?: () => void;
}
declare const Dialog: React.SFC<DailogProps>;
export default Dialog;
