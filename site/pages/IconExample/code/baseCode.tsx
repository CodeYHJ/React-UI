import React from 'react';
import { Icon } from '@com/index';
export interface IconDemoProps {

}

const IconDemo: React.SFC<IconDemoProps> = () => {
    return (
        <div>
            <Icon name="cancel" />
        </div>
    );
}

export default IconDemo;