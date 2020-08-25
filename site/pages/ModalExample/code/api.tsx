import React, { useState } from 'react';

import { Button, Modal } from '@lib/index';

export interface ModalDemoProps {

}

const ModalDemo: React.SFC<ModalDemoProps> = () => {

    const infoMessage = () => {
        Modal.info({
            mainText: 'info',
            okText: 'ok'
        })
    }

    const successMessage = () => {
        Modal.success({
            mainText: 'success',
            okText: 'ok'
        })
    }
    const errorMessage = () => {
        Modal.error({
            mainText: 'error',
            okText: 'ok'
        })
    }
    const warnMessage = () => {
        Modal.warn({
            mainText: 'warn',
            okText: 'ok'
        })
    }

    return (
        <div>
            <Button type="primary" onClick={infoMessage} style={{ marginRight: '20px' }}>info</Button>
            <Button type="success" onClick={successMessage} style={{ marginRight: '20px' }}>Success</Button>
            <Button type="danger" onClick={errorMessage} style={{ marginRight: '20px' }}>Error</Button>
            <Button type="warn" onClick={warnMessage} style={{ marginRight: '20px' }}>Warn</Button>
        </div>
    );
}

export default ModalDemo;