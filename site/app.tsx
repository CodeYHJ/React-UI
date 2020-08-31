import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from "react-router-dom";
import LayoutExample from "./pages/LayoutExample"
import ButtonExample from "./pages/ButtonExample"
import Introduction from "./pages/Introduction"
import Color from "./pages/Color"



import { Layout } from "@com/index";
const { Header, Content, Aside, Footer } = Layout
import HeaderPage from './component/Header'
import AsidePage from './component/Aside'
import IconExample from './pages/IconExample';
import ModalExample from './pages/ModalExample';

import { classPre } from "./util/index";
import './app.less'
import FormExample from './pages/FormExample';
import InputExample from './pages/InputExample';
import GirdExample from './pages/GirdExample';

interface AppProps {

}
const c = classPre('app')
const App: React.SFC<AppProps> = () => {
    return (
        <Router>
            <Layout className={c()} >
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
                                <Route path="/react/introduction" exact component={Introduction} />
                                <Route path="/react/color" exact component={Color} />
                                <Route path="/react/layout" exact component={LayoutExample} />
                                <Route path="/react/button" exact component={ButtonExample} />
                                <Route path="/react/icon" exact component={IconExample} />
                                <Route path="/react/modal" exact component={ModalExample} />
                                <Route path="/react/form" exact component={FormExample} />
                                <Route path="/react/input" exact component={InputExample} />
                                <Route path="/react/gird" exact component={GirdExample} />
                                <Redirect exact to="/react/introduction" from="/react" />
                            </Switch>

                        </Content>
                    </Layout>
                </Content>
                <Footer className={c('footer')}>&copy;</Footer>
            </Layout>

        </Router>
    )

}
ReactDOM.render(<StrictMode><App /></StrictMode>, document.getElementById('app'))
export default App;