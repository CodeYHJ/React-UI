import React, { Fragment, MouseEventHandler, ReactNode, HtmlHTMLAttributes, useEffect } from 'react';
import "./Dialog.less"
import { createPortal } from 'react-dom';
import { classPre } from '@lib/utils';
import { Icon, Button } from '@lib/index';
import Transition from '@lib/Transition';
export interface DailogProps extends HtmlHTMLAttributes<HTMLElement> {
    visible: boolean,
    onOk?: MouseEventHandler,
    onCancel?: MouseEventHandler,
    maskClosable?: boolean,
    closable?: boolean,
    footer?: ReactNode,
    headerText?: string,
    okText?: string,
    cancelText?: string,
    opencb?: () => void
    closecb?: () => void


}
const c = classPre('dialog')


const Dialog: React.SFC<DailogProps> = (props) => {
    const { visible, onCancel, onOk, maskClosable = false, footer, okText, cancelText, headerText, closable } = props

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
        if (!headerText) return null
        return <header className={c('header')}>{headerText}</header>
    }
    const Footer = () => {
        if (footer === null) return null
        return footer ? footer : <footer className={c('footer')}>
            <Button type="default" onClick={onClickClose} className={c('cancel')}>{cancelText ? cancelText : 'cancel'}</Button>
            <Button type="primary" onClick={onClickOk} className={c('ok')}>{okText ? okText : 'ok'}</Button>
        </footer>
    }
    const CloseIcon = () => {
        return closable ? <div className={c("close")} onClick={onClickClose} >
            <Icon name="cancel" />
        </div> : null
    }
    const handleOpencb = () => {
        props.opencb && props.opencb()
    }
    const handleClosecb = () => {
        props.closecb && props.closecb()
    }
    return createPortal((
        <Fragment>
            <Transition visible={visible} beforeEnter={{ opacity: 0 }} enter={{ opacity: 1 }} leave={{ opacity: 0 }} time={.5}>
                <div className={c('mask')} onClick={onClickMask}></div>
            </Transition>
            <Transition opencb={handleOpencb} closecb={handleClosecb} visible={visible} beforeEnter={{ opacity: 0, transform: 'scale(0)' }} enter={{ opacity: 1, transform: 'scale(1)' }} leave={{ transform: 'scale(0)' }} time={.5}>
                <div className={c()}>
                    {CloseIcon()}
                    {Header()}
                    <main className={c('main')}>
                        {props.children}
                    </main>
                    {Footer()}
                </div>
            </Transition>
        </Fragment>
    ), document.body)

}
Dialog.defaultProps = {
    visible: false,
    maskClosable: false,
    closable: false,
    okText: "ok",
    cancelText: "cancel"
}

export default Dialog;