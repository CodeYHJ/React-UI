import React from 'react';

import { Input, Icon } from '@codeyhj/react-ui';

const { UserIcon } = Icon

export interface InputDemoProps {

}

const InputDemo: React.SFC<InputDemoProps> = () => {

    const userIcon = <UserIcon />

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