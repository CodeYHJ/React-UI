import React from 'react';
import Dialog from './Dialog';
import ReactDOM, { unmountComponentAtNode } from 'react-dom';
import { classPre } from '@com/utils';
import { Icon, Button } from '@com/index';
const { MainIcon, DangerIcon, SuccessIcon, WarnIcon } = Icon
import './style/Modal.less'
interface PropsConfig {
    visible: boolean,
    mainText: string,
    okText?: string,
    type: ModalType,
    className?: string
}
interface ModalProps {
    mainText: string,
    okText?: string
}
const c = classPre('modal')

type ModalType = 'info' | 'danger' | 'warn' | 'success'

const createIcon = (type: ModalType) => {
    if (type === 'danger') {
        return <DangerIcon className={c("icon")} />
    } else if (type === 'info') {
        return <MainIcon className={c("icon")} />
    }
    else if (type === 'success') {
        return <SuccessIcon className={c("icon")} />
    }
    else if (type === 'warn') {
        return <WarnIcon className={c("icon")} />
    } else {
        return <MainIcon className={c("icon")} />
    }
}
const ModalBase = (propsConfig: PropsConfig) => {
    const div = document.createElement('div')
    propsConfig.className && div.setAttribute('class', propsConfig.className)
    document.body.appendChild(div);
    const currentConfig = { ...propsConfig, visible: true }
    const render = (propsConfig: PropsConfig) => {
        ReactDOM.render(
            <Dialog visible={propsConfig.visible} footer={null} headerText=''>
                <header className={c("header")}>{createIcon(currentConfig.type)}</header>
                <main className={c("mainContent")}>{propsConfig.mainText ? propsConfig.mainText : ''}</main>
                <footer className={c("footer")}>
                    <Button type="primary" onClick={close}>{propsConfig.okText ? propsConfig.okText : 'OK'}</Button>
                </footer>
            </Dialog>,
            div)
    }
    const close = () => {
        render({ ...currentConfig, visible: false })
        const timer = setTimeout(() => {
            destroy()
            clearTimeout(timer)
        }, 600)
    }
    const destroy = () => {
        const umn = unmountComponentAtNode(div)
        if (umn && div) {
            div.remove()

        }
    }
    render(currentConfig)
    return {
        close
    }
}

export const errorFn = (props: ModalProps) => {
    return ModalBase({ ...props, visible: true, type: 'danger', className: c('danger') })
}
export const warnFn = (props: ModalProps) => {
    return ModalBase({ ...props, visible: true, type: 'warn', className: c('warn') })
}
export const successFn = (props: ModalProps) => {
    return ModalBase({ ...props, visible: true, type: 'success', className: c('success') })
}
export const infoFn = (props: ModalProps) => {
    return ModalBase({ ...props, visible: true, type: 'info', className: c('info') })
}
type ModalFun = (props: ModalProps) => { close: () => void; }

export type ModalApi = {
    error: ModalFun,
    warn: ModalFun,
    success: ModalFun,
    info: ModalFun,
}



