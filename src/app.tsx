import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import CreateIcon from '@com/Icon/createIcon';
import Dialog from '@com/Dialog';
import { Icon } from '@com/Icon';
import Button from '@com/Button';
import render from '@com/Modal';
import Modal from '@com/Modal';
interface AppProps {

}
const App: React.SFC<AppProps> = () => {
    useEffect(() => {
        Modal.danger({ mainText: 'test' })
    }, [])
    const [show, setShow] = useState(false)
    const closeDailog = (e: React.MouseEvent<Element, MouseEvent>) => {
        console.log('close')
        setShow(false)
    }
    const onpenDailog = (e: React.MouseEvent<Element, MouseEvent>) => {
        console.log('open')
        setShow(true)
    }
    return (
        <div>
            <Dialog visble={show} onCancel={closeDailog} onOk={closeDailog} maskClosable={true}>
                <div>asdasdasd</div>
            </Dialog>
            <Button>123</Button>
            <Button type="main" onClick={onpenDailog}>123</Button>

            <Button type="warn">123</Button>
            <Button type="danger">123</Button>
            <Button type="safe">123</Button>
        </div>

    );
}
ReactDOM.render(<App />, document.getElementById('app'))
export default App;