import AppRoutes from './modules/app/components/AppRoutes';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';

const root = ReactDOM.createRoot(document.querySelector('.container'));
root.render(
    <BrowserRouter>
        <AppRoutes />
    </BrowserRouter>
);