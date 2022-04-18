import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cl from './NavBarModule.module.css'
import { AuthContext } from '../../../context';
import AppRouter from './../../AppRouter';

const NavBar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)

    const exit = () =>{
        setIsAuth(false)
    }
    return (
        <div className={cl.navBar}>
            <div className={cl.navBarLinks}>
                <Link to="/about">О сайте</Link>
                <Link to="/posts">Посты</Link>
                
                <Link onClick={exit} to="/login">Выйти</Link>
            </div>
        </div>
    );
};

export default NavBar;