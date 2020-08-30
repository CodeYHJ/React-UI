import React, { useState } from 'react';
import { Button, Icon } from '@com/index';
const { CancelIcon } = Icon
export interface ButtonDemoProps {

}
const ButtonDemo: React.SFC<ButtonDemoProps> = () => {

    const [loading, setLoading] = useState(false)

    const handleClick = () => {
        setLoading(false)
    }

    const preIcon = <CancelIcon />

    return (
        <div>
            <Button type="danger" pre={preIcon} >danger</Button>

            <Button type="primary" pre={preIcon} loading={loading} onClick={handleClick}>primary</Button>

        </div>
    );
}

export default ButtonDemo;


