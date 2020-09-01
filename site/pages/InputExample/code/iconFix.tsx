import React from 'react';

import { Input } from '@codeyhj/react-ui';

import { UserIcon, PasswordIcon } from '@codeyhj/react-ui/lib/Icon';

export interface InputDemoProps {

}

const InputDemo: React.SFC<InputDemoProps> = () => {

    const userIcon = <UserIcon />

    const passwordIcon = <PasswordIcon />

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