import React from 'react';
import { classPre } from "../../util/index";
import "./index.less";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

export interface HeaderProps {

}
const c = classPre('headerPage')
const Header: React.SFC<HeaderProps> = () => {
    return (
        <div className={c()}>
            <span className={c('logo')}>
                <Link to="/" >CodeUI</Link>
            </span>
            <span className={c('component')}>
                <Link to="/" >组件</Link>
            </span>
            {/* <span className={c('document')}>
                <Link to="/" >文档</Link>
            </span> */}
            <span className={c('github')}>
                <a className={c('github-link')} href="https://github.com/CodeYHJ/React-UI" target="_blank" rel="noopener noreferrer">
                    <span className={c('github-png')}></span>
                </a>
            </span>
        </div>
    );
}

export default Header;