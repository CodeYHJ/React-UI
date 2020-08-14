import React, { useState } from 'react';

import { Button, Modal } from '@lib/index';

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
            <Modal headerText="基本" okText="ok" cancelText="cancel" visible={open} onCancel={handleClose} onOk={handleClose} maskClosable >
                Modal
                    </Modal>
            <Button type="primary" onClick={handleOpen} >open Modal</Button>
        </div>
    );
}

export default ModalDemo;