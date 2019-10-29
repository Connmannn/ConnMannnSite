import React from "react";
import SidebarToggleButton from '../Sidebar/SidebarToggleButton';

import './Toolbar.css';
import logo from './MConn.png';

const toolbar = props => (
    <div className="toolbar">
        <nav className="toolbar__navigation">
            <div className="toolbar__toggle-button">
                <SidebarToggleButton click={props.sideSlideClickHandler} />
            </div>
            <div className="toolbar__logo"><a href="/"><img src = {logo} alt="logo" /></a></div>
            <div className="spacing" />
            <div className="toolbar__navigation-items">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Skills</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </div>
        </nav>
    </div>
);

export default toolbar;