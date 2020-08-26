import React from 'react';
import { classPre } from "../../util/index";
import ExampleBox from "../../component/ExampleBox";
import { Row } from "@codeyhj/react-ui";
const { Col } = Row
import './index.less'
import ExampleApi from '../../component/ExampleApi';
export interface GirdExampleProps {

}
const c = classPre('gird')

const GirdExample: React.SFC<GirdExampleProps> = () => {
    const handleRowData = [
        { name: 'justify', dsc: 'flex排列方式', type: ['start', 'end', 'center', 'space-around', 'space-between'], value: '--' },
        { name: 'align', dsc: 'flex排列方式', type: ['top', 'middle', 'bottom'], value: '--' },
        { name: 'gutter', dsc: '栅格间隔（px）', type: ['number', 'number[]'], value: '--' },
    ]
    const handleColData = [
        { name: 'span', dsc: '占位格数', type: ['number'], value: '24' },
        { name: 'offset', dsc: '位移格数', type: ['number'], value: '0' },
        { name: 'sm', dsc: '响应式栅格，> 576px 生效', type: ['number'], value: '0' },
        { name: 'md', dsc: '响应式栅格，> 768px 生效', type: ['number'], value: '0' }, { name: 'lg', dsc: '响应式栅格，> 992px 生效', type: ['number'], value: '0' },
        { name: 'xl', dsc: '响应式栅格，> 1200px 生效', type: ['number'], value: '0' },
    ]

    return (<div className={c()}>
        <section>
            <h1 className={c('title')}>Gird栅格布局</h1>
            <p className={c('p')}>栅格响应式布局</p>
        </section>
        <section>
            <h2>代码示例</h2>
            <ExampleBox
                title="基础示例"
                description="基本栅格，总分为24格，span为控制占位格数的属性"
                code={require('!!raw-loader!./code/baseCode.tsx')}>
                <div className={c('rowExample')}>
                    <Row >
                        <Col span={24}>
                            <div className={c('primary')}>24</div>
                        </Col>
                    </Row>
                </div>
                <div className={c('rowExample')}>
                    <Row >
                        <Col span={12}>
                            <div className={c('light')}>12</div>
                        </Col>
                        <Col span={12}>
                            <div className={c('primary')}>12</div>
                        </Col>
                    </Row>
                </div>
                <div className={c('rowExample')}>
                    <Row >
                        <Col span={8}>
                            <div className={c('light')}>8</div>
                        </Col>
                        <Col span={8}>
                            <div className={c('primary')}>8</div>
                        </Col>
                        <Col span={8}>
                            <div className={c('light')}>8</div>
                        </Col>
                    </Row>
                </div>
                <div className={c('rowExample')}>
                    <Row >
                        <Col span={6}>
                            <div className={c('light')}>4</div>
                        </Col>
                        <Col span={6}>
                            <div className={c('primary')}>4</div>
                        </Col>
                        <Col span={6}>
                            <div className={c('light')}>4</div>
                        </Col>
                        <Col span={6}>
                            <div className={c('primary')}>4</div>
                        </Col>
                    </Row>
                </div>
            </ExampleBox>
            <ExampleBox
                title="偏移"
                description="在Row容器内的元素，允许一定程度的偏移，offset属性控制偏移格数"
                code={require('!!raw-loader!./code/offsetCode.tsx')}>
                <div className={c('rowExample')}>
                    <Row >
                        <Col span={8}>
                            <div className={c('light')}>8</div>
                        </Col>
                        <Col span={8} offset={8}>
                            <div className={c('primary')}>offset-8</div>
                        </Col>
                    </Row>
                </div>
                <div className={c('rowExample')}>
                    <Row >
                        <Col span={4} offset={1}>
                            <div className={c('light')}>offset-1</div>
                        </Col>
                        <Col span={4} offset={3}>
                            <div className={c('primary')}>offset-3</div>
                        </Col>
                        <Col span={4} offset={5}>
                            <div className={c('light')}>offset-5</div>
                        </Col>
                    </Row>
                </div>
            </ExampleBox>
            <ExampleBox
                title="间隔"
                description="在Col元素相互之间定义统一的间隔，分为横向与纵向。可以只定义横向，也可以横向与纵向一起定义"
                code={require('!!raw-loader!./code/offsetCode.tsx')}>
                <div className={c('rowExample')}>
                    <Row gutter={12}>
                        <Col span={8}>
                            <div className={c('light')}>8</div>
                        </Col>
                        <Col span={8}>
                            <div className={c('primary')}>8</div>
                        </Col>
                    </Row>
                </div>
                <div className={c('rowExample')}>
                    <Row gutter={[12, 24]}>
                        <Col span={4} >
                            <div className={c('light')}>4</div>
                        </Col>
                        <Col span={4} >
                            <div className={c('primary')}>4</div>
                        </Col>
                        <Col span={4} >
                            <div className={c('light')}>4</div>
                        </Col>
                    </Row>
                </div>
            </ExampleBox>
            <ExampleBox
                title="Flex-justify布局"
                description="实现Flex的justify排列"
                code={require('!!raw-loader!./code/justifyCode.tsx')}>
                <div className={c('rowExample')}>
                    <Row justify="start">
                        <Col span={4}>
                            <div className={c('light')}>4</div>
                        </Col>
                        <Col span={4}>
                            <div className={c('primary')}>4</div>
                        </Col>
                        <Col span={4}>
                            <div className={c('light')}>4</div>
                        </Col>
                    </Row>

                </div>
                <div className={c('rowExample')}>
                    <Row justify="center">
                        <Col span={4}>
                            <div className={c('light')}>4</div>
                        </Col>
                        <Col span={4}>
                            <div className={c('primary')}>4</div>
                        </Col>
                        <Col span={4}>
                            <div className={c('light')}>4</div>
                        </Col>
                    </Row>
                </div>
                <div className={c('rowExample')}>
                    <Row justify="end">
                        <Col span={4}>
                            <div className={c('light')}>4</div>
                        </Col>
                        <Col span={4}>
                            <div className={c('primary')}>4</div>
                        </Col>
                        <Col span={4}>
                            <div className={c('light')}>4</div>
                        </Col>
                    </Row>
                </div>
                <div className={c('rowExample')}>
                    <Row justify="space-around">
                        <Col span={4}>
                            <div className={c('light')}>4</div>
                        </Col>
                        <Col span={4}>
                            <div className={c('primary')}>4</div>
                        </Col>
                        <Col span={4}>
                            <div className={c('light')}>4</div>
                        </Col>
                    </Row>
                </div>
                <div className={c('rowExample')}>
                    <Row justify="space-between">
                        <Col span={4}>
                            <div className={c('light')}>4</div>
                        </Col>
                        <Col span={4}>
                            <div className={c('primary')}>4</div>
                        </Col>
                        <Col span={4}>
                            <div className={c('light')}>4</div>
                        </Col>
                    </Row>
                </div>
            </ExampleBox>
            <ExampleBox
                title="Flex-aligin布局"
                description="实现Flex的aligin排列"
                code={require('!!raw-loader!./code/alignCode.tsx')}>
                <div className={c('rowExample')}>
                    <Row align="top" gutter={24}>
                        <Col span={4}>
                            <div className={c('light-align')}>4</div>
                        </Col>
                        <Col span={4}>
                            <div className={c('primary-align')}>4</div>
                        </Col>
                        <Col span={4}>
                            <div className={c('light-align')}>4</div>
                        </Col>
                    </Row>
                </div>
                <div className={c('rowExample')}>
                    <Row align="middle" gutter={24}>
                        <Col span={4}>
                            <div className={c('light-align')}>4</div>
                        </Col>
                        <Col span={4}>
                            <div className={c('primary-align')}>4</div>
                        </Col>
                        <Col span={4}>
                            <div className={c('light-align')}>4</div>
                        </Col>
                    </Row>
                </div>
                <div className={c('rowExample')}>
                    <Row align="bottom" gutter={24}>
                        <Col span={4}>
                            <div className={c('light-align')}>4</div>
                        </Col>
                        <Col span={4}>
                            <div className={c('primary-align')}>4</div>
                        </Col>
                        <Col span={4}>
                            <div className={c('light-align')}>4</div>
                        </Col>
                    </Row>
                </div>

            </ExampleBox>
            <ExampleBox
                title="响应式"
                description="设置 sm、md、lg、xl 属性覆盖以实现响应式布局"
                code={require('!!raw-loader!./code/responsiveCode.tsx')}>
                <div className={c('rowExample')}>
                    <Row gutter={12}>
                        <Col span={4} sm={4} md={2} lg={4} xl={1}>
                            <div className={c('light')}>4</div>
                        </Col>
                        <Col span={4} sm={4} md={4} lg={4} xl={2}>
                            <div className={c('primary')}>4</div>
                        </Col>
                        <Col span={4} sm={4} md={3} lg={4} xl={3}>
                            <div className={c('light')}>4</div>
                        </Col>
                        <Col span={4} sm={4} md={1} lg={4} xl={4}>
                            <div className={c('primary')}>4</div>
                        </Col>
                        <Col span={4} sm={4} md={2} lg={4} xl={5}>
                            <div className={c('light')}>4</div>
                        </Col>
                        <Col span={4} sm={4} md={5} lg={4} xl={6}>
                            <div className={c('primary')}>4</div>
                        </Col>
                    </Row>
                </div>

            </ExampleBox>
        </section>
        <h2>Api</h2>
        <ExampleApi title="Row" data={handleRowData}></ExampleApi>
        <ExampleApi title="Col" data={handleColData}></ExampleApi>

    </div>);
}

export default GirdExample;