import React from 'react';
import { Icon } from '@com/index';
const { createIcon } = Icon
export interface IconDemoProps {

}
const ScriptIcon = createIcon('url')

const IconDemo: React.SFC<IconDemoProps> = () => {
    return (
        <div>
            <ScriptIcon name="icon-jianceqi" />

            <ScriptIcon name="icon-jinggai" />

            <ScriptIcon name="icon-liujisuan" />

            <ScriptIcon name="icon-hanshu" />

            <ScriptIcon name="icon-lianjieliu" />
        </div>
    );
}

export default IconDemo;