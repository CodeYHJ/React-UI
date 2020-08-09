import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import LayoutExample from "@lib/Layout/LayoutExample"
import { Layout, Aside, Content, Header, Footer } from "@lib/Layout";
interface AppProps {

}
const App: React.SFC<AppProps> = () => {
    return (
        <Router>
            <Layout style={{ width: '100vw', height: '100vh' }}>
                <Header>
                    <header>
                        <div className="logo">
                            CodeUI
                         </div>
                    </header>
                </Header>
                <Content >
                    <Layout >
                        <Aside style={{ position: 'fixed', left: '0', height: "100vh" }}>
                            <aside>
                                <h2>组件</h2>
                                <ul>
                                    <li>
                                        <Link to="/layout" >layout</Link>
                                    </li>
                                </ul>
                            </aside>
                        </Aside>
                        <Content style={{ marginLeft: "200px" }}>
                            <Route path="/layout" component={LayoutExample} />
                        </Content>
                    </Layout>
                </Content>
            </Layout>

        </Router>
    )

}
ReactDOM.render(<App />, document.getElementById('app'))
export default App;