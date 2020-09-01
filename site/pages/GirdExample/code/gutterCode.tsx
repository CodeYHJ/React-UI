import React from 'react';

import { Row }  from '@codeyhj/react-ui';

const { Col } = Row

export interface GutterProps {

}

const Gutter: React.SFC<GutterProps> = () => {
    return (
        <div>

            <div>
                <Row gutter={12}>
                    <Col span={8}>
                        <div >8</div>
                    </Col>
                    <Col span={8}>
                        <div >8</div>
                    </Col>
                </Row>
            </div>

            <div>
                <Row gutter={[12, 24]}>
                    <Col span={4} >
                        <div >4</div>
                    </Col>
                    <Col span={4} >
                        <div >4</div>
                    </Col>
                    <Col span={4} >
                        <div >4</div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Gutter;