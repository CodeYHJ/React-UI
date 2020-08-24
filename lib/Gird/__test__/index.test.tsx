import Row from "../index"
const { Col } = Row
import React from "react"
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
describe('Gird', () => {
    describe('render', () => {
        it('base', () => {
            const base = (
                <div>
                    <Row >
                        <Col span={24}>24</Col>
                    </Row>
                    <Row >
                        <Col span={12}>12</Col>
                        <Col span={12}>12</Col>
                    </Row>
                    <Row >
                        <Col span={8}>8</Col>
                        <Col span={8}>8</Col>
                        <Col span={8}>8</Col>
                    </Row>
                    <Row >
                        <Col span={6}>4</Col>
                        <Col span={6}>4</Col>
                        <Col span={6}>4</Col>
                        <Col span={6}>4</Col>
                    </Row>
                </div>

            )
            const json = renderer.create(base).toJSON()
            expect(json).toMatchSnapshot()
        })
        it('gutter', () => {
            const gutter = (
                <div>
                    <Row gutter={12}>
                        <Col span={8}>
                            <div >8</div>
                        </Col>
                        <Col span={8}>
                            <div >8</div>
                        </Col>
                    </Row>
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

            )
            const json = renderer.create(gutter).toJSON()
            expect(json).toMatchSnapshot()
        })
        it('align', () => {
            const align = (
                <div>
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

            )
            const json = renderer.create(align).toJSON()
            expect(json).toMatchSnapshot()
        })
        it('justify', () => {
            const justify = (
                <div>
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

            )
            const json = renderer.create(justify).toJSON()
            expect(json).toMatchSnapshot()
        })
        it('offset', () => {
            const offset = (
                <div>
                    <Row >
                        <Col span={8}>8</Col>
                        <Col span={8} offset={8}>offset-8</Col>
                    </Row>
                    <Row >
                        <Col span={4} offset={1}>offset-1</Col>
                        <Col span={4} offset={3}>offset-3</Col>
                        <Col span={4} offset={5}>offset-5</Col>
                    </Row>
                </div>

            )
            const json = renderer.create(offset).toJSON()
            expect(json).toMatchSnapshot()
        })
        it('responsive', () => {
            const responsive = (
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

            )
            const json = renderer.create(responsive).toJSON()
            expect(json).toMatchSnapshot()
        })
    })
})