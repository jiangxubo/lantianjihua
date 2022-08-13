import React from 'react';
import { createRoot } from 'react-dom/client';
import '@/components/style/style.scss'
import { BrowserRouter,unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import App from './app';

const root = createRoot( document.getElementById('root')); 
root.render(<BrowserRouter><App /></BrowserRouter>);