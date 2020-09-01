import React from 'react';

import { Input }  from '@codeyhj/react-ui';

export interface InputDemoProps {

}

const InputDemo: React.SFC<InputDemoProps> = () => {

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value, '值改变')
    }

    const handleOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        console.log('聚焦')
    }

    const handleOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        console.log('失焦')
    }

    return (
        <div>
            <div>
                <Input placeholder="基本使用" onChange={handleOnChange} onFocus={handleOnFocus} onBlur={handleOnBlur} />
            </div>
            <br />
            <div>
                <Input placeholder="password" type="password" onChange={handleOnChange} onFocus={handleOnFocus} onBlur={handleOnBlur} />
            </div>
            <br />
            <div>
                <Input placeholder="number" type="number" onChange={handleOnChange} onFocus={handleOnFocus} onBlur={handleOnBlur} />
            </div>
        </div>
    );
}

export default InputDemo;