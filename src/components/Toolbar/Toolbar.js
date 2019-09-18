import React from "react";
import SlideToggleButton from '../SideSlide/SlideToggleButton';

import './Toolbar.css';
import logo from './logo.png';

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div className="toolbar__toggle-button">
                <SlideToggleButton click={props.sideSlideClickHandler} />
            </div>
            <div className="toolbar__logo"><a href="/"><img src = {logo} alt="logo" /></a></div>
            <div className="spacing" />
            <div className="toolbar__navigation-items">
                <ul>
                    <li><a href="/signup">Signup</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;