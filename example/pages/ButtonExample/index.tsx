import React, { useState, useCallback } from 'react';
import { classPre } from "../../util/index";
import ExampleBox from "../../component/ExampleBox";
import { Button, Icon } from '@lib/index';
import './index.less'
import ExampleApi from '../../component/ExampleApi';
export interface ButtonExampleProps {

}
const c = classPre('button')
const ButtonExample: React.SFC<ButtonExampleProps> = () => {
    const [loading, setLoading] = useState(false)
    const [loading2, setLoading2] = useState(false)

    const preIcon = (<Icon name="cancle" />)
    const handleClick = () => {
        setLoading(!loading)
    }
    const handleClick2 = () => {
        setLoading2(!loading2)
    }

    const handleData = [
        { name: 'type', dsc: '按钮类型', type: ['primary', 'danger', 'warn', 'default', 'success', 'dashed'], value: 'default' },
        { name: 'disabled', dsc: '失效状态', type: ['Boolean'], value: 'false' },
        { name: 'loading', dsc: '加载状态', type: ['Boolean'], value: 'false' },
        { name: 'pre', dsc: '图标组件', type: ['ReactNode'], value: '--' },
        { name: 'onClick', dsc: '点击回调', type: ['(event：MouseEventHandler) => void'], value: '--' },
    ]
    return (<div className={c()}>
        <section>
            <h1>Button按钮</h1>
            <p>用于点击一个即时操作</p>
        </section>
        <section>
            <h2>何时使用</h2>
            <p>用户点击行为，触发相应逻辑操作</p>
        </section>
        <section>
            <h2>代码示例</h2>
            <ExampleBox title="按钮类型" description="按钮有六种类型：默认按钮、虚线按钮、主要按钮、危险按钮、警告按钮、成功按钮">
                <Button type="default" style={{ marginRight: '20px' }}>default</Button>
                <Button type="dashed" style={{ marginRight: '20px' }}>dashed</Button>
                <Button type="primary" style={{ marginRight: '20px' }}>primary</Button>
                <Button type="danger" style={{ marginRight: '20px' }}>danger</Button>
                <Button type="warn" style={{ marginRight: '20px' }}>warn</Button>
                <Button type="success" style={{ marginRight: '20px' }}>success</Button>
            </ExampleBox>
            <ExampleBox title="Disabled" description="设置 Disabled 状态">
                <Button type="default" disabled style={{ marginRight: '20px' }}>default</Button>
                <Button type="dashed" disabled style={{ marginRight: '20px' }}>dashed</Button>
                <Button type="primary" disabled style={{ marginRight: '20px' }}>primary</Button>
            </ExampleBox>
            <ExampleBox title="Loading" description="设置 Loading 状态">
                <Button type="danger" loading style={{ marginRight: '20px' }}>danger</Button>
                <Button type="primary" style={{ marginRight: '20px' }} loading={loading} onClick={handleClick}>primary</Button>
            </ExampleBox>
            <ExampleBox title="PreFix" description="自定义Icon">
                <Button type="danger" pre={preIcon} style={{ marginRight: '20px' }}>danger</Button>
                <Button type="primary" style={{ marginRight: '20px' }} pre={preIcon} loading={loading2} onClick={handleClick2}>primary</Button>
            </ExampleBox>
        </section>
        <ExampleApi data={handleData}></ExampleApi>
    </div>);
}

export default ButtonExample;