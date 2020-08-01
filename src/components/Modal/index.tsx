import React from 'react';
import Dialog from '../Dialog';
import ReactDOM, { unmountComponentAtNode } from 'react-dom';
import Icon from '@com/Icon/Icon';
import { classPre } from '@com/utils';
import Button from '@com/Button';
import './index.less'
interface PropsConfig {
    visble: boolean,
    mainText: string,
    okText?: string,
    type: ModalType
}
interface ModalProps {
    mainText: string,
    okText?: string
}
const c = classPre('modal')

type ModalType = 'main' | 'danger' | 'warn' | 'safe'

const createIcon = (type: ModalType) => {
    if (type === 'danger') {
        return <Icon name="danger" className={c("icon")} />
    } else if (type === 'main') {
        return <Icon name="main" className={c("icon")} />

    }
    else if (type === 'safe') {
        return <Icon name="safe" className={c("icon")} />

    }
    else if (type === 'warn') {
        return <Icon name="warn" className={c("icon")} />

    } else {
        return <Icon name="main" className={c("icon")} />
    }
}
const ModalBase = (propsConfig: PropsConfig) => {
    const div = document.createElement('div')
    document.body.appendChild(div);
    const currentConfig = { ...propsConfig, visble: true }
    const render = (propsConfig: PropsConfig) => {
        ReactDOM.render(
            <Dialog visble={propsConfig.visble} footer={null} headerText=''>
                <header className={c("header")}>{createIcon(currentConfig.type)}</header>
                <main className={c("main")}>{propsConfig.mainText ? propsConfig.mainText : ''}</main>
                <footer className={c("footer")}>
                    <Button type="main" onClick={close}>{propsConfig.okText ? propsConfig.okText : 'OK'}</Button>
                </footer>
            </Dialog>,
            div)
    }
    const close = () => {
        render({ ...currentConfig, visble: false })
        destroy()
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

const danger = (props: ModalProps) => {
    return ModalBase({ ...props, visble: true, type: 'danger' })
}
const warn = (props: ModalProps) => {
    return ModalBase({ ...props, visble: true, type: 'warn' })
}
const safe = (props: ModalProps) => {
    return ModalBase({ ...props, visble: true, type: 'safe' })
}
const main = (props: ModalProps) => {
    return ModalBase({ ...props, visble: true, type: 'main' })
}

const Modal = {
    danger,
    warn,
    safe,
    main
}
export default Modal;
