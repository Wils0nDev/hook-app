


import React from 'react';
import {  Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from './HomePage';
import { AboutPage } from './AboutPage';
import { LoginPage } from './LoginPage';
import { Navbar } from './Navbar';
import { UserProvider } from './context/UserProvider';

//!Routes : Componente que encapsula cada una de las rutas
//! Route : Define cada una de las rutas pasandole el path y el componentPage
//!Navigate : Esta es otra forma y la mas recomendable, se va directamente a la ruta definida en casa no exista la ruta.

export const MainPage = () => {
    return (
        <UserProvider>
            <h1>MainApp</h1>
            <Navbar />
            <hr />
            <Routes>
                <Route  path='/' element={<HomePage />} />
                <Route  path='/login' element={<LoginPage />} />
                <Route  path='/about' element={<AboutPage />} />
                //* Esta es una forma de renderizar en caso no exista la ruta
                {/* <Route path='/*' element={<LoginPage />} /> */}
                <Route  path='/*' element={<Navigate to="/about" />}/>
            </Routes>
        </UserProvider>
    );
}

