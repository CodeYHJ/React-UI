import React from 'react';

import { Row } from '@lib/index';

const { Col } = Row

export interface GirdDemoProps {

}

const GirdDemo: React.SFC<GirdDemoProps> = () => {
    return (
        <div>

            <div >
                <Row align="top" gutter={24}>
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
                <Row align="middle" gutter={24}>
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
                <Row align="bottom" gutter={24}>
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