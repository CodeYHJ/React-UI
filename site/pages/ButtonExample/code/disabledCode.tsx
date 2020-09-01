import React from 'react';

import { Button } from '@codeyhj/react-ui';

export interface ButtonDemoProps {

}
const ButtonDemo: React.SFC<ButtonDemoProps> = () => {
    return (
        <div>
            <Button type="default" disabled >default</Button>

            <Button type="dashed" disabled >dashed</Button>

            <Button type="primary" disabled >primary</Button>
        </div>
    );
}

export default ButtonDemo;
