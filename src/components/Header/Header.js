import React from 'react';
import NavBar from '../NavBar/NavBar';
import './Header.css'
const Header = () => {
    return (
        <div className="header">
            <div className="text-box">
                <h1>Effortless Moving You Can Afford</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, doloribus.</p>
                <a href="#contact" className="header-btn">Visit us to know more</a>
            </div>
        </div>
    );
};

export default Header;