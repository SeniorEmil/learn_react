import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cl from './NavBarModule.module.css'
import { AuthContext } from '../../../context';
import AppRouter from './../../AppRouter';
import MyButton from '../button/MyButton';

const NavBar = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext)

    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth', 'false')
    }

    return (
        <div className={cl.navBar}>
            <div className={cl.navBarLinks}>
                <Link to="/about">О сайте</Link>
                <Link to="/posts">Посты</Link>
            </div>
            {isAuth
                ? <MyButton onClick={logout}>
                    Выйти
                </MyButton>
                : <Link to="/login">Войти</Link>
            }
        </div>
    );
};

export default NavBar;