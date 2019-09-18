import React from 'react';

import './SideSlide.css';

const sideSlide = props => {
    let slideClasses = ['side-slide'];
    if (props.show) {
        slideClasses = 'side-slide open';
    }
    return (
    <nav className={slideClasses}>
        <ul>
            <li><a href="/signup">Signup</a></li>
            <li><a href="/login">Login</a></li>
        </ul>
    </nav>
    );
};

export default sideSlide;