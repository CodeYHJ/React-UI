import React, { Fragment } from 'react';
import { classPre } from "../../util/index";
import "./index.less";
import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";

export interface AsideProps {

}
const c = classPre('aside')
const Aside: React.SFC<AsideProps> = () => {
    return (
        <div className={c()}>
            <h3 className={c('title')}>组件</h3>
            <ul className={c('ul')}>
                <li className={c('li')}>
                    <NavLink className={c('navLink')} to="/introduction" >Introduction</NavLink>
                </li>
                <li className={c('li')}>
                    <NavLink className={c('navLink')} to="/color" >Color</NavLink>
                </li>
                <li className={c('li')}>
                    <NavLink className={c('navLink')} to="/layout" >layout</NavLink>
                </li>
                <li className={c('li')}>
                    <NavLink className={c('navLink')} to="/button" >Button</NavLink>
                </li>
                <li className={c('li')}>
                    <NavLink className={c('navLink')} to="/icon" >Icon</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Aside;