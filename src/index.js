import React from 'react';
import { createRoot } from 'react-dom/client';
import '@/components/style/style.scss'
import { BrowserRouter} from 'react-router-dom';
import App from './app';

const root = createRoot( document.getElementById('root')); 
// console.log(mobile({ tablet: true }),12312);
// if (mobile({ tablet: true })) {
//   flexible()
//   root.render(<BrowserRouter><App type='h5' /></BrowserRouter>);
// } else {
//   root.render(<BrowserRouter><App type='pc' /></BrowserRouter>);
// }
root.render(<BrowserRouter><App /></BrowserRouter>);
// root.render(<BrowserRouter><App type='h5' /></BrowserRouter>);