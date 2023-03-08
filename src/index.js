import React from 'react';
import ReactDOM from 'react-dom';
import  App from './components/App';
import Register from './components/Register'
import Login from './components/Login'
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path="/Register" element={<Register />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Home' element={<Home />} />
        </Routes>
    </BrowserRouter>,
    document.getElementById('root'));
