import React from "react"
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import Layout from '../index'
const { Content, Header, Footer, Aside } = Layout
describe('Layout', () => {
    describe('render Layout modal', () => {
        it('modale one', () => {
            const json = renderer.create(
                <Layout >
                    <Header  >Header</Header>
                    <Content >Content</Content>
                    <Footer >Footer</Footer>
                </Layout>
            )
            expect(json).toMatchSnapshot()

        })
        it('modale two', () => {
            const json = renderer.create(
                <Layout >
                    <Header  >Header</Header>
                    <Content >
                        <Layout >
                            <Aside>Aside</Aside>
                            <Content >Content</Content>
                        </Layout>
                    </Content>
                    <Footer >Footer</Footer>
                </Layout>
            )
            expect(json).toMatchSnapshot()
        })
        it('modale three', () => {
            const json = renderer.create(
                <Layout >
                    <Header  >Header</Header>
                    <Content >
                        <Layout >
                            <Content >Content</Content>
                            <Aside>Aside</Aside>
                        </Layout>
                    </Content>
                    <Footer >Footer</Footer>
                </Layout>
            )
            expect(json).toMatchSnapshot()
        })
        it('modale four', () => {
            const json = renderer.create(
                <Layout >
                    <Header  >Header</Header>
                    <Content >
                        <Layout >
                            <Header  >Header</Header>
                            <Content >Content</Content>
                            <Footer >Footer</Footer>
                        </Layout>
                    </Content>
                    <Footer >Footer</Footer>
                </Layout>
            )
            expect(json).toMatchSnapshot()
        })
    })

})