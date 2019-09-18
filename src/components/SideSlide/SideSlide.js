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
            <li><a href="/">About</a></li>
            <li><a href="/">Something</a></li>
            <li><a href="/">Something</a></li>
            <li><a href="/">Something</a></li>
        </ul>
    </nav>
    );
};

export default sideSlide;