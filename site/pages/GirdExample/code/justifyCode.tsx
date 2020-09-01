import React from 'react';

import { Row }  from '@codeyhj/react-ui';

const { Col } = Row

export interface GirdDemoProps {

}

const GirdDemo: React.SFC<GirdDemoProps> = () => {
    return (
        <div>

            <div >
                <Row justify="start">
                    <Col span={4}>
                        <div >4</div>
                    </Col>
                    <Col span={4}>
                        <div >4</div>
                    </Col>
                    <Col span={4}>
                        <div >4</div>
                    </Col>
                </Row>

            </div>

            <div >
                <Row justify="center">
                    <Col span={4}>
                        <div >4</div>
                    </Col>
                    <Col span={4}>
                        <div >4</div>
                    </Col>
                    <Col span={4}>
                        <div >4</div>
                    </Col>
                </Row>
            </div>

            <div >
                <Row justify="end">
                    <Col span={4}>
                        <div >4</div>
                    </Col>
                    <Col span={4}>
                        <div >4</div>
                    </Col>
                    <Col span={4}>
                        <div >4</div>
                    </Col>
                </Row>
            </div>

            <div >
                <Row justify="space-around">
                    <Col span={4}>
                        <div >4</div>
                    </Col>
                    <Col span={4}>
                        <div >4</div>
                    </Col>
                    <Col span={4}>
                        <div >4</div>
                    </Col>
                </Row>
            </div>

            <div >
                <Row justify="space-between">
                    <Col span={4}>
                        <div >4</div>
                    </Col>
                    <Col span={4}>
                        <div >4</div>
                    </Col>
                    <Col span={4}>
                        <div >4</div>
                    </Col>
                </Row>
            </div>

        </div>
    );
}

export default GirdDemo;