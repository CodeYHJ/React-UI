import React from 'react';

import { Input, Icon } from '@lib/index';

export interface InputDemoProps {

}

const InputDemo: React.SFC<InputDemoProps> = () => {

    const userIcon = <Icon name="user" />

    const passwordIcon = <Icon name="password" />

    return (
        <div>
            <div>
                <Input placeholder="前置Icon" preIconFix={userIcon} />
            </div>
            <br />
            <div>
                <Input placeholder="后置Icon" sufIconFix={passwordIcon} />
            </div>
            <br />
            <div>
                <Input placeholder="前/后置Icon" preIconFix={userIcon} sufIconFix={passwordIcon} />
            </div>
        </div>
    );
}

export default InputDemo;