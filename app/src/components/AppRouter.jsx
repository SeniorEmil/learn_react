import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import About from '../pages/About'
import Error from '../pages/Error';
import Posts from '../pages/Posts';


const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<h1>Главная</h1>} />
            <Route path='/about' element={<About />} />
            <Route path='/posts' element={<Posts />} />
            <Route path='/error' element={<Error />} />
            <Route path="*" element={<Navigate to="/error" />} />
        </Routes>
    );
};

export default AppRouter;