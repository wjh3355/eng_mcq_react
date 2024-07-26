import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   // <StrictMode>
      <App/>
   // </StrictMode>
);
// note: npm run deploy to create production build for gh-pages.