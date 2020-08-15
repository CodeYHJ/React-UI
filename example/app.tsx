import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from "react-router-dom";
import LayoutExample from "./pages/LayoutExample"
import ButtonExample from "./pages/ButtonExample"
import Introduction from "./pages/Introduction"
import Color from "./pages/Color"



import { Layout } from "@lib/index";
const { Header, Content, Aside, Footer } = Layout
import HeaderPage from './component/Header'
import AsidePage from './component/Aside'
import IconExample from './pages/IconExample';
import ModalExample from './pages/ModalExample';

import { classPre } from "./util/index";
import './app.less'
import FormExample from './pages/FormExample';
import InputExample from './pages/InputExample';

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
                                <Route path="/modal" exact component={ModalExample} />
                                <Route path="/form" exact component={FormExample} />
                                <Route path="/input" exact component={InputExample} />
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
ReactDOM.render(<StrictMode><App /></StrictMode>, document.getElementById('app'))
export default App;