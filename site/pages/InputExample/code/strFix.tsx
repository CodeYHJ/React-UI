import React from 'react';

import { Input } from '@com/index';

export interface InputDemoProps {

}

const InputDemo: React.SFC<InputDemoProps> = () => {

    return (
        <div>
            <div>
                <Input placeholder="baidu.com" preStrFix='http://' />
            </div>
            <br />
            <div>
                <Input placeholder="http://baidu" sufStrFix='.com' />
            </div>
            <br />
            <div>
                <Input placeholder="baidu" preStrFix='http://' sufStrFix='.com' />
            </div>
        </div>
    );
}

export default InputDemo;