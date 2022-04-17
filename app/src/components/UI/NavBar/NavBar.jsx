import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cl from './NavBarModule.module.css'

const NavBar = () => {
    return (
        <div className={cl.navBar}>
            <div className={cl.navBarLinks}>
                <Link to="/about">О сайте</Link>
                <Link to="/posts">Посты</Link>
            </div>
        </div>
    );
};

export default NavBar;