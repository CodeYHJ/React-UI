import React from 'react';
import { Icon } from '@codeyhj/react-ui';
const { CancelIcon } = Icon
export interface IconDemoProps {

}

const IconDemo: React.SFC<IconDemoProps> = () => {
    return (
        <div>
            <CancelIcon />
        </div>
    );
}

export default IconDemo;