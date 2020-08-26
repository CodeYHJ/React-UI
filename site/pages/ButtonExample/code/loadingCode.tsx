import React, { useState } from 'react';
import Button from '@com/Button';
export interface ButtonDemoProps {

}
const ButtonDemo: React.SFC<ButtonDemoProps> = () => {

    const [loading, setLoading] = useState(false)
    
    return (
        <div>
            <Button type="danger" loading>danger</Button>

            <Button type="primary" loading={loading}>primary</Button>

        </div>
    );
}

export default ButtonDemo;
