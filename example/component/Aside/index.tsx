import React, { Fragment } from 'react';
import { classPre } from "../../util/index";
import "./index.less";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

export interface AsideProps {

}

const Aside: React.SFC<AsideProps> = () => {
    return (
        <Fragment>
            <h2>组件</h2>
            <ul>
                <li>
                    <Link to="/introduction" >Introduction</Link>
                </li>
                <li>
                    <Link to="/color" >Color</Link>
                </li>
                <li>
                    <Link to="/layout" >layout</Link>
                </li>
                <li>
                    <Link to="/Button" >Button</Link>
                </li>
            </ul>
        </Fragment>
    );
}

export default Aside;