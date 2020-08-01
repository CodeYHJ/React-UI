import React, { Fragment, MouseEventHandler, ReactNode } from 'react';
import { classPre } from '@com/utils';
import "./index.less"
import { Icon } from '@com/Icon';
import Button from '@com/Button';
import { createPortal, unmountComponentAtNode } from 'react-dom';
export interface DailogProps {
    visble: boolean,
    onOk?: MouseEventHandler,
    onCancel?: MouseEventHandler,
    maskClosable?: boolean,
    closable?: boolean,
    footer?: ReactNode,
    headerText?: string,
    okText?: string,
    cancleText?: string
}
const c = classPre('dailog')

const Dialog: React.SFC<DailogProps> = (props) => {
    const { visble, onCancel, onOk, maskClosable = false, footer, okText, cancleText, headerText, closable } = props
    const onClickClose: MouseEventHandler = (e) => {
        onCancel && onCancel(e)
    }
    const onClickMask: MouseEventHandler = (e) => {
        if (maskClosable) {
            onCancel && onCancel(e)
        }

    }
    const onClickOk: MouseEventHandler = (e) => {
        onOk && onOk(e)
    }
    const Header = () => {
        if (headerText === '' || headerText === null) return null
        return <header className={c('header')}>{headerText}</header>
    }
    const Footer = () => {
        if (footer === null) return null
        return footer ? footer : <footer className={c('footer')}>
            <Button type="default" onClick={onClickClose}>{cancleText ? cancleText : 'cancel'}</Button>
            <Button type="main" onClick={onClickOk} className={c('ok')}>{okText ? okText : 'ok'}</Button>
        </footer>
    }
    const CloseIcon = () => {
        return closable ? <div className={c("close")} onClick={onClickClose} >
            <Icon name="cancle" />
        </div> : null
    }
    const dialog = visble ?
        <Fragment>
            <div className={c('mask')} onClick={onClickMask}></div>
            <div className={c()}>
                {CloseIcon()}
                {Header()}
                <main className={c('main')}>
                    {props.children}
                </main>
                {Footer()}
            </div>
        </Fragment>
        : null

    return (
        createPortal(dialog, document.body)
    );
}

Dialog.defaultProps = {
    visble: false,
    maskClosable: false,
    closable: false,
    headerText: "Dialog",
    okText: "ok",
    cancleText: "cancel"
}

export default Dialog;