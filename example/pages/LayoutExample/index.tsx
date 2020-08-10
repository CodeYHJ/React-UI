import React from 'react';
import Layout from "@lib/Layout/Layout";
import Herader from '@lib/Layout/Header';
import Content from '@lib/Layout/Content';
import Footer from '@lib/Layout/Footer';
import Aside from '@lib/Layout/Aside';
export interface LayoutExampleProps {

}

const LayoutExample: React.SFC<LayoutExampleProps> = () => {
    return (
        <div style={{margin:"0 0 60px 0"}}>
            <div>
                <h1>第一个例子</h1>
                <Layout style={{ color: '#ffffff' }}>
                    <Herader style={{ background: "#7DBCEA", textAlign: 'center', lineHeight: '50px' }}>Header</Herader>
                    <Content style={{ background: "#108EE9", textAlign: 'center', lineHeight: '50px' }}>Content</Content>
                    <Footer style={{ background: "#7DBCEA", textAlign: 'center', lineHeight: '50px' }}>Footer</Footer>
                </Layout>
            </div>
            <div>
                <h1>第二个例子</h1>
                <Layout style={{ color: '#ffffff' }}>
                    <Herader style={{ background: "#7DBCEA", textAlign: 'center', lineHeight: '50px' }}>Header</Herader>
                    <Layout style={{ color: '#ffffff' }}>
                        <Aside style={{ background: '#3ba0e9', display: 'flex', justifyContent: 'center', alignItems: "center" }}>Aside</Aside>
                        <Content style={{ background: "#108EE9", textAlign: 'center', lineHeight: '50px' }}>Content</Content>
                    </Layout>
                    <Footer style={{ background: "#7DBCEA", textAlign: 'center', lineHeight: '50px' }}>Footer</Footer>
                </Layout>
            </div>
            <div>
                <h1>第三个例子</h1>
                <Layout style={{ color: '#ffffff' }}>
                    <Herader style={{ background: "#7DBCEA", textAlign: 'center', lineHeight: '50px' }}>Header</Herader>
                    <Layout style={{ color: '#ffffff' }}>
                        <Content style={{ background: "#108EE9", textAlign: 'center', lineHeight: '50px' }}>Content</Content>
                        <Aside style={{ background: '#3ba0e9', display: 'flex', justifyContent: 'center', alignItems: "center" }}>Aside</Aside>
                    </Layout>
                    <Footer style={{ background: "#7DBCEA", textAlign: 'center', lineHeight: '50px' }}>Footer</Footer>
                </Layout>
            </div>
            <div>
                <h1>第四个例子</h1>
                <Layout style={{ color: '#ffffff' }}>
                    <Aside style={{ background: '#3ba0e9', display: 'flex', justifyContent: 'center', alignItems: "center" }}>Aside</Aside>
                    <Layout style={{ color: '#ffffff' }}>
                        <Herader style={{ background: "#7DBCEA", textAlign: 'center', lineHeight: '50px' }}>Header</Herader>
                        <Content style={{ background: "#108EE9", textAlign: 'center', lineHeight: '50px' }}>Content</Content>
                        <Footer style={{ background: "#7DBCEA", textAlign: 'center', lineHeight: '50px' }}>Footer</Footer>
                    </Layout>
                </Layout>
            </div>
        </div>
    );
}

export default LayoutExample;