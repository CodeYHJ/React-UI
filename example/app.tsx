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
import { classPre } from "./util/index";
import './app.less'
import IconExample from './pages/IconExample';
interface AppProps {

}
const c = classPre('app')
const App: React.SFC<AppProps> = () => {
    return (
        <Router>
            <Layout className={c()} style={{ width: '100vw', height: '100vh' }}>
                <Header>
                    <HeaderPage />
                </Header>
                <Content >
                    <Layout >
                        <Aside >
                            <AsidePage />
                        </Aside>
                        <Content >
                            <Switch>
                                <Route path="/introduction" exact component={Introduction} />
                                <Route path="/color" exact component={Color} />
                                <Route path="/layout" exact component={LayoutExample} />
                                <Route path="/button" exact component={ButtonExample} />
                                <Route path="/icon" exact component={IconExample} />
                                <Redirect exact to="/introduction" from="/" />
                            </Switch>

                        </Content>
                    </Layout>
                </Content>
                <Footer className={c('footer')}>&copy;</Footer>
            </Layout>

        </Router>
    )

}
ReactDOM.render(<App />, document.getElementById('app'))
export default App;