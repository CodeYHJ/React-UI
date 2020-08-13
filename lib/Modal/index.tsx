import React from 'react';
import Dialog, { DailogProps } from '../Dialog';
import ReactDOM, { unmountComponentAtNode } from 'react-dom';
import './index.less'
import { classPre } from '@lib/utils';
import { Icon } from '@lib/Icon';
import Button from '@lib/Button';
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
        return <Icon name="danger" className={c("icon")} />
    } else if (type === 'info') {
        return <Icon name="main" className={c("icon")} />
    }
    else if (type === 'success') {
        return <Icon name="success" className={c("icon")} />

    }
    else if (type === 'warn') {
        return <Icon name="warn" className={c("icon")} />

    } else {
        return <Icon name="main" className={c("icon")} />
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

const error = (props: ModalProps) => {
    return ModalBase({ ...props, visible: true, type: 'danger', className: c('danger') })
}
const warn = (props: ModalProps) => {
    return ModalBase({ ...props, visible: true, type: 'warn', className: c('warn') })
}
const success = (props: ModalProps) => {
    return ModalBase({ ...props, visible: true, type: 'success', className: c('success') })
}
const info = (props: ModalProps) => {

    return ModalBase({ ...props, visible: true, type: 'info', className: c('info') })
}
type ModalFun = (props: ModalProps) => void

const Modal: {
    error: ModalFun,
    warn: ModalFun,
    success: ModalFun,
    info: ModalFun,
    Modal: React.SFC<DailogProps>
} = {
    error,
    warn,
    success,
    info,
    Modal: Dialog
}
export default Modal;
