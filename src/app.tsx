import React from 'react';
import ReactDOM from 'react-dom';
import CreateIcon from '@com/Icon/createIcon';
import Dailog from '@com/Dailog';
import { Icon } from '@com/Icon';
import Button from '@com/Button';
interface AppProps {

}
const App: React.SFC<AppProps> = () => {

    return (
        <div>
            <Dailog visble={true} onCancel={()=>{console.log('cancle')}} onOk={()=>{console.log('ok')}}>
                <div>asdasdasd</div>
            </Dailog>
            <Button>123</Button>
            <Button type="main">123</Button>

            <Button type="warn">123</Button>
            <Button type="danger">123</Button>
            <Button type="safe">123</Button>
        </div>

    );
}
ReactDOM.render(<App />, document.getElementById('app'))
export default App;