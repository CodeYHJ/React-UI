import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from "react-router-dom";
import LayoutExample from "./pages/LayoutExample"
import ButtonExample from "./pages/ButtonExample"
import Introduction from "./pages/Introduction"
import Color from "./pages/Color"



import { Layout, Aside, Content, Header, Footer } from "@lib/Layout";
import HeaderPage from './component/Header'
import AsidePage from './component/Aside'

interface AppProps {

}
const App: React.SFC<AppProps> = () => {
    return (
        <Router>
            <Layout style={{ width: '100vw', height: '100vh' }}>
                <Header>
                    <HeaderPage />
                </Header>
                <Content >
                    <Layout >
                        <Aside style={{ position: 'fixed', left: '0', height: "100vh" }}>
                            <AsidePage />
                        </Aside>
                        <Content style={{ marginLeft: "200px" }}>
                            <Switch>
                                <Route path="/" exact component={Introduction} />
                                <Route path="/color" exact component={Color} />
                                <Route path="/layout" exact component={LayoutExample} />
                                <Route path="/Button" exact component={ButtonExample} />
                                <Redirect exact to="/" />
                            </Switch>

                        </Content>
                    </Layout>
                </Content>
            </Layout>

        </Router>
    )

}
ReactDOM.render(<App />, document.getElementById('app'))
export default App;