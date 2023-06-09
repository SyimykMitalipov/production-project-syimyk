import React, { Suspense, useContext, useState } from 'react'
import Counter from './components/Counter/Counter'
import './styles/index.scss'
import { Route, Routes } from 'react-router-dom';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { Link } from 'react-router-dom';
import { ThemeContext, Theme, LOCAL_STORAGE_THEME } from './theme/ThemeContext';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';



const App = () => {
    const { theme, toggleTheme }  = useTheme();

return (
        <div className={classNames('app', { hovered: true, selected: false  }, [ theme ])}>
            <button onClick={toggleTheme}>Change Theme</button>
                <Link to={'/'}>Главная</Link>
                <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                        <Route path='/about' element={<AboutPageAsync />} />
                        <Route path='/' element={<MainPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    )
}

export default App