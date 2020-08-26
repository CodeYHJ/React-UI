import React from 'react';

import { Input, Icon } from '@com/index';

export interface InputDemoProps {

}

const InputDemo: React.SFC<InputDemoProps> = () => {

    const userIcon = <Icon name="user" />

    return (
        <div>
            <div>
                <Input placeholder="固定文字块 Error" preStrFix='http://' error />
            </div>
            <br />
            <div>
                <Input placeholder="固定文字块 Disabled" sufStrFix='.com' disabled />
            </div>
            <br />
            <div>
                <Input placeholder="前置Icon Error" preIconFix={userIcon} error />
            </div>
            <br />
            <div>
                <Input placeholder="前置Icon disabled" preIconFix={userIcon} disabled />
            </div>
        </div>
    );
}

export default InputDemo;