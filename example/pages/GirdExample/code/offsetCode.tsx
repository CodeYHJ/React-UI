import React from 'react';

import { Row } from '@lib/index';

const { Col } = Row

export interface GirdDemoProps {

}

const GirdDemo: React.SFC<GirdDemoProps> = () => {
    return (
        <div>

            <div>
                <Row >
                    <Col span={8}>8</Col>
                    <Col span={8} offset={8}>offset-8</Col>
                </Row>
            </div>

            <div>
                <Row >
                    <Col span={4} offset={1}>offset-1</Col>
                    <Col span={4} offset={3}>offset-3</Col>
                    <Col span={4} offset={5}>offset-5</Col>
                </Row>
            </div>

        </div>
    );
}

export default GirdDemo;