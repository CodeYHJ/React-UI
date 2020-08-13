import React, { useState } from 'react';
import { classPre } from "../../util/index"

import "./index.less";
import ExampleBox from '../../component/ExampleBox';
import Button from '@lib/Button';
import Dialog from '@lib/Dialog';
import { Modal } from '@lib/index';

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
                //  code={require('!!raw-loader!./code/baseCode.tsx')}
                >
                    <Dialog headerText="基本" okText="ok" cancleText="cancle" visible={open} onCancel={handleClose} onOk={handleClose} maskClosable >
                        Modal
                    </Dialog>
                    <Button type="primary" onClick={handleOpen} >open Modal</Button>
                </ExampleBox>
                {/* <ExampleBox title="自定义" description="自定义header、footer。不需要footer时可传null。不需要header可不传"
                //  code={require('!!raw-loader!./code/baseCode.tsx')}
                >
                    <Dialog visible={open1} onCancel={handleClose1} onOk={handleClose1} maskClosable footer={null}>
                        Modal
                    </Dialog>
                    <Button type="primary" onClick={handleOpen1} >open Modal</Button>
                </ExampleBox> */}
                {/* <ExampleBox title="信息提示" description="只有一个按钮用于关闭"
                //  code={require('!!raw-loader!./code/baseCode.tsx')}
                >
                    <Button type="primary" onClick={infoMessage} style={{ marginRight: '20px' }}>info</Button>
                    <Button type="success" onClick={successMessage} style={{ marginRight: '20px' }}>Success</Button>
                    <Button type="danger" onClick={errorMessage} style={{ marginRight: '20px' }}>Error</Button>
                    <Button type="warn" onClick={warnMessage} style={{ marginRight: '20px' }}>Warn</Button>
                </ExampleBox> */}
            </section>
        </div>
    );
}

export default ModalExample;