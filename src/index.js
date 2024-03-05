import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

const root = document.getElementById('root');

const render = createRoot(root);
render.render(<App />);
