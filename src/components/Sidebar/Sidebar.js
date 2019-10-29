import React from 'react';

import './Sidebar.css';

const sidebar = props => {
    let sidebarClasses = ['sidebar'];
    if (props.show) {
        sidebarClasses = 'sidebar open';
    }
    return (
    <div className="sidebar__container">
        <nav className={sidebarClasses}>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Skills</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
        </nav>
    </div>
    );
};

export default sidebar;