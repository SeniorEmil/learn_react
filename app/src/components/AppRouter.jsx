import React, {useContext} from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import { privateRoutes, publicRoutes } from '../router';
import { AuthContext } from './../context/index';


const AppRouter = () => {
    const {isAuth} = useContext(AuthContext)
    return (
        isAuth
            ? <Routes>
                {privateRoutes.map((route, index) =>
                    <Route
                        element={route.element}
                        // element={<About />}
                        path={route.path}
                        exact={route.exact}
                        key={index}
                    />
                )}
                <Route path="*" element={<Navigate to="/posts" />} />
            </Routes>
            : <Routes>
                {publicRoutes.map((route, index) =>
                    <Route
                        element={route.element}
                        // element={<About />}
                        path={route.path}
                        exact={route.exact}
                        key={index}
                    />
                )}
                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>

    );
};

export default AppRouter;