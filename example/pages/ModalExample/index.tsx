import React, { useState } from 'react';
import { classPre } from "../../util/index"
import "./index.less";
import ExampleBox from '../../component/ExampleBox';
import Button from '@lib/Button';
import Modal from '@lib/Modal';
import ExampleApi from '../../component/ExampleApi';

export interface ModalExampleProps {

}
const c = classPre('modal')

const ModalExample: React.SFC<ModalExampleProps> = () => {
    const [open, setOpen] = useState(false)
    const [open1, setOpen1] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    const handleOpen1 = () => {
        setOpen1(true)
    }
    const handleClose1 = () => {
        setOpen1(false)
    }
    const infoMessage = () => {
        Modal.info({
            mainText: 'info',
            okText: 'ok'
        })
    }
    const successMessage = () => {
        Modal.success({
            mainText: 'success',
            okText: 'ok'
        })
    }
    const errorMessage = () => {
        Modal.error({
            mainText: 'error',
            okText: 'ok'
        })
    }
    const warnMessage = () => {
        Modal.warn({
            mainText: 'warn',
            okText: 'ok'
        })
    }
    const handleData = [
        { name: 'visible', dsc: '是否可见', type: ['boolean'], value: 'false' },
        { name: 'onOK', dsc: '点击确定回调', type: ['(event：MouseEventHandler) => void'], value: '--' },
        { name: 'onCancel', dsc: '点击取消回调', type: ['(event：MouseEventHandler) => void'], value: '--' },
        { name: 'maskClosable', dsc: '是否关闭蒙层', type: ['boolean'], value: 'false' },
        { name: 'closable', dsc: '是否显示关闭按钮', type: ['boolean'], value: 'false' },
        { name: 'footer', dsc: '底部内容，当不需要默认底部按钮时，可以设为 footer={null}', type: ['ReactNode'], value: 'false' },
        { name: 'headerText', dsc: '头部内容，当不需要默认头部，可以设为 headerText={null}', type: ['string'], value: '' },
        { name: 'okText', dsc: '确认按钮文字', type: ['string'], value: 'ok' },
        { name: 'cancelText', dsc: '取消按钮文字', type: ['string'], value: 'cancel' },
        { name: 'className', dsc: '容器className', type: ['string'], value: '--' },
        { name: 'style', dsc: '指定样式', type: ['CSSProperties'], value: '--' },
    ]
    const handleMethodData=[
        { name: 'mainText', dsc: '主要内容', type: ['string'], value: '--' },
        { name: 'okText', dsc: '确定按钮内容', type: ['string'], value: '--' },

    ]
    return (
        <div className={c()}>
            <section>
                <h1 className={c('title')}>Modal</h1>
                <p className={c('p')}>对话框</p>
            </section>
            <section>
                <h2 className={c('title')}>何时使用</h2>
                <p className={c('p')}>避免打断用户操作流程，可以使用Modal交互来处理相关事情</p>
            </section>
            <section>
                <h2 className={c('title')}>代码示例</h2>
                <ExampleBox title="基本" description="组件方式使用，通过控制visible属性来显示or隐藏"
                    code={require('!!raw-loader!./code/baseCode.tsx')}
                >
                    <Modal headerText="基本" okText="ok" cancelText="cancel" visible={open} onCancel={handleClose} onOk={handleClose} maskClosable >
                        Modal
                    </Modal>
                    <Button type="primary" onClick={handleOpen} >open Modal</Button>
                </ExampleBox>
                <ExampleBox title="自定义" description="自定义header、footer。不需要footer时可传null。不需要header可不传"
                    code={require('!!raw-loader!./code/customize.tsx')}
                >
                    <Modal visible={open1} onCancel={handleClose1} onOk={handleClose1} maskClosable footer={null}>
                        Modal
                    </Modal>
                    <Button type="primary" onClick={handleOpen1} >open Modal</Button>
                </ExampleBox>
                <ExampleBox title="信息提示" description="只有一个按钮用于关闭"
                    code={require('!!raw-loader!./code/api.tsx')}
                >
                    <Button type="primary" onClick={infoMessage} style={{ marginRight: '20px' }}>info</Button>
                    <Button type="success" onClick={successMessage} style={{ marginRight: '20px' }}>Success</Button>
                    <Button type="danger" onClick={errorMessage} style={{ marginRight: '20px' }}>Error</Button>
                    <Button type="warn" onClick={warnMessage} style={{ marginRight: '20px' }}>Warn</Button>
                </ExampleBox>
            </section>
            <ExampleApi data={handleData}></ExampleApi>
            <section>
                <h2 className={c('title')}>Modal.method</h2>
                <p className={c('p')}>包括：</p>
                <p className={c('p')}>Modal.info( )</p>
                <p className={c('p')}>Modal.success( )</p>
                <p className={c('p')}>Modal.warn( )</p>
                <p className={c('p')}>Modal.error( )</p>
            </section>
            <ExampleApi data={handleMethodData} title="method options"></ExampleApi>

        </div>
    );
}

export default ModalExample;