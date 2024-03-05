import React from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
    const root = document.getElementById('root');
    const render = createRoot(root);
    render.render(<App />);
    ReactDOM.unmountComponentAtNode(div);
});
