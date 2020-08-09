import React from 'react';
import Layout from "./Layout";
import Herader from './Header';
import Content from './Content';
import Footer from './Footer';
import Aside from './Aside';
export interface LayoutExampleProps {

}

const LayoutExample: React.SFC<LayoutExampleProps> = () => {
    return (
        <div>
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