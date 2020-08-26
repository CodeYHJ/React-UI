import React, { useState } from 'react';

import { Button, Modal } from '@com/index';

export interface ModalDemoProps {

}

const ModalDemo: React.SFC<ModalDemoProps> = () => {

    const [open, setOpen] = useState(false)

    const handleClose = () => {
        setOpen(false)
    }

    const handleOpen = () => {
        setOpen(true)
    }

    return (
        <div>
            <Modal visible={open} onCancel={handleClose} onOk={handleClose} maskClosable footer={null}>
                Modal
            </Modal>
            <Button type="primary" onClick={handleOpen} >open Modal</Button>
        </div>
    );
}

export default ModalDemo;