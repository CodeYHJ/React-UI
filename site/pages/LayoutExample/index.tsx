import React from 'react';
import { Layout } from "@com/index";
const { Header, Content, Aside, Footer } = Layout
import { classPre } from "../../util/index";
import "./index.less"
import ExampleBox from '../../component/ExampleBox';
import ExampleApi from '../../component/ExampleApi';
export interface LayoutExampleProps {

}
const c = classPre('layout')

const LayoutExample: React.SFC<LayoutExampleProps> = () => {

    const handleData = [
        { name: 'className', dsc: '容器className', type: ['string'], value: '--' },
        { name: 'style', dsc: '指定样式', type: ['CSSProperties'], value: '--' },
    ]
    return (
        <div className={c()}>
            <section>
                <h1 className={c('title')}>Layout布局</h1>
                <p className={c('p')}>页面整体布局</p>
            </section>
            <section>
                <h2 className={c('title')}>组件成员</h2>
                <p className={c('p')}><strong>Layout</strong>、<strong>Header</strong>、<strong>Content</strong>、<strong>Footer</strong></p>
                <p className={c('p')}><strong>Layout</strong> ：只可嵌套Layout、Header、Content、Footer本身</p>
                <p className={c('p')}><strong>Header</strong> ：可嵌套任何元素</p>
                <p className={c('p')}><strong>Content</strong> ：可嵌套任何元素</p>
                <p className={c('p')}><strong>Footer</strong> ：只可嵌套任何元素</p>
            </section>
            <section>
                <h2 className={c('title')}>代码示例</h2>
                <ExampleBox className={c("exampleBox")} title="基本结构" description="页面布局">
                    <section>
                        <Layout style={{ color: '#ffffff' }}>
                            <Header className={c('header')} >Header</Header>
                            <Content className={c('content')} >Content</Content>
                            <Footer className={c('footer')} >Footer</Footer>
                        </Layout>
                    </section>
                    <section>
                        <Layout style={{ color: '#ffffff' }}>
                            <Header className={c('header')}>Header</Header>
                            <Layout style={{ color: '#ffffff' }}>
                                <Aside className={c('aside')}>Aside</Aside>
                                <Content className={c('content')}>Content</Content>
                            </Layout>
                            <Footer className={c('footer')} >Footer</Footer>
                        </Layout>
                    </section>
                    <section>
                        <Layout style={{ color: '#ffffff' }}>
                            <Header className={c('header')}>Header</Header>
                            <Layout style={{ color: '#ffffff' }}>
                                <Content className={c('content')}>Content</Content>
                                <Aside className={c('aside')}>Aside</Aside>
                            </Layout>
                            <Footer className={c('footer')} >Footer</Footer>
                        </Layout>
                    </section>
                    <section>
                        <Layout style={{ color: '#ffffff' }}>
                            <Aside className={c('aside')}>Aside</Aside>
                            <Layout style={{ color: '#ffffff' }}>
                                <Header className={c('header')}>Header</Header>
                                <Content className={c('content')}>Content</Content>
                                <Footer className={c('footer')} >Footer</Footer>
                            </Layout>
                        </Layout>
                    </section>
                </ExampleBox>
            </section>
            <ExampleApi data={handleData}></ExampleApi>
        </div>
    );
}

export default LayoutExample;