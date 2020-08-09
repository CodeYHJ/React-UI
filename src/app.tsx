import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import CreateIcon from '@com/Icon/createIcon';
import Dialog from '@com/Dialog';
import { Icon, createIcon } from '@com/Icon';
import Button from '@com/Button';
import render from '@com/Modal';
import Modal from '@com/Modal';
interface AppProps {

}
const App: React.SFC<AppProps> = () => {
    // const LocalIcon = createIcon('//at.alicdn.com/t/font_1973431_ia5jq3fwut.js')

    const [show, setShow] = useState(false)
    const closeDailog = (e: React.MouseEvent<Element, MouseEvent>) => {
        console.log('close')
        setShow(false)
    }
    const onpenDailog = (e: React.MouseEvent<Element, MouseEvent>) => {
        console.log('open')
        setShow(true)
    }
    const dangerOpen = () => {
        Modal.danger({ mainText: 'test' })

    }
    const warnOpen = () => {
        Modal.warn({ mainText: 'test' })

    }
    const safeOpen = () => {
        Modal.safe({ mainText: 'test' })

    }
    const mainOpen = () => {
        Modal.main({ mainText: 'test' })

    }
    return (
        <div>
            <Dialog visble={show} onCancel={closeDailog} onOk={closeDailog} maskClosable={true}>
                <div>asdasdasd</div>
            </Dialog>
            <Button onClick={onpenDailog}>123</Button>
            <Button type="main" onClick={mainOpen}>123</Button>

            <Button type="warn" onClick={warnOpen}>123</Button>
            <Button type="danger" onClick={dangerOpen}>123</Button>
            <Button type="safe" onClick={safeOpen}>123</Button>
        </div>

    );
}
ReactDOM.render(<App />, document.getElementById('app'))
export default App;