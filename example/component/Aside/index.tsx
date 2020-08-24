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
                    <NavLink className={c('navLink')} to="/react/introduction" >Introduction</NavLink>
                </li>
                <li className={c('li')}>
                    <NavLink className={c('navLink')} to="/react/color" >Color</NavLink>
                </li>
                <li className={c('li')}>
                    <NavLink className={c('navLink')} to="/react/layout" >layout</NavLink>
                </li>
                <li className={c('li')}>
                    <NavLink className={c('navLink')} to="/react/gird" >Gird</NavLink>
                </li>
                <li className={c('li')}>
                    <NavLink className={c('navLink')} to="/react/button" >Button</NavLink>
                </li>
                <li className={c('li')}>
                    <NavLink className={c('navLink')} to="/react/icon" >Icon</NavLink>
                </li>
                <li className={c('li')}>
                    <NavLink className={c('navLink')} to="/react/modal" >Modal</NavLink>
                </li>
                {/* <li className={c('li')}>
                    <NavLink className={c('navLink')} to="/react/form" >Form</NavLink>
                </li> */}
                <li className={c('li')}>
                    <NavLink className={c('navLink')} to="/react/input" >Input</NavLink>
                </li>

            </ul>
        </div>
    );
}

export default Aside;