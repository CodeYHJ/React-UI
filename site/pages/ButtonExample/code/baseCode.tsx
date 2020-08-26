import React from 'react';
import Button from '@com/Button';
export interface ButtonDemoProps {

}

const ButtonDemo: React.SFC<ButtonDemoProps> = () => {
    return (
        <div>
            <Button type="default">default</Button>

            <Button type="dashed">dashed</Button>

            <Button type="primary">primary</Button>

            <Button type="danger">danger</Button>

            <Button type="warn">warn</Button>

            <Button type="success">success</Button>
        </div>
    );
}

export default ButtonDemo;
