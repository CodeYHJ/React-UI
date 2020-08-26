import React from 'react';

import { Row } from '@com/index';

const { Col } = Row

export interface GirdDemoProps {

}

const GirdDemo: React.SFC<GirdDemoProps> = () => {
    return (
        <div>

            <div>
                <Row >
                    <Col span={24}>24</Col>
                </Row>
            </div>

            <div>
                <Row >
                    <Col span={12}>12</Col>
                    <Col span={12}>12</Col>
                </Row>
            </div>

            <div>
                <Row >
                    <Col span={8}>8</Col>
                    <Col span={8}>8</Col>
                    <Col span={8}>8</Col>
                </Row>
            </div>

            <div>
                <Row >
                    <Col span={6}>4</Col>
                    <Col span={6}>4</Col>
                    <Col span={6}>4</Col>
                    <Col span={6}>4</Col>
                </Row>
            </div>

        </div>
    );
}

export default GirdDemo;