import React from 'react';

import { Row }  from '@codeyhj/react-ui';

const { Col } = Row

export interface GirdDemoProps {

}

const GirdDemo: React.SFC<GirdDemoProps> = () => {
    return (
        <div>
            <Row gutter={12}>
                <Col span={4} sm={4} md={2} lg={4} xl={1}>
                    <div >4</div>
                </Col>
                <Col span={4} sm={4} md={4} lg={4} xl={2}>
                    <div >4</div>
                </Col>
                <Col span={4} sm={4} md={3} lg={4} xl={3}>
                    <div >4</div>
                </Col>
                <Col span={4} sm={4} md={1} lg={4} xl={4}>
                    <div >4</div>
                </Col>
                <Col span={4} sm={4} md={2} lg={4} xl={5}>
                    <div >4</div>
                </Col>
                <Col span={4} sm={4} md={5} lg={4} xl={6}>
                    <div >4</div>
                </Col>
            </Row>
        </div>
    );
}

export default GirdDemo;