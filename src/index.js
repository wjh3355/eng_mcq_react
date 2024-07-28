import React from 'react';
import ReactDOM from 'react-dom/client';

import GEPApp from './components/GEP MCQ/GEPApp';

import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   // <StrictMode>
      <GEPApp/>
   // </StrictMode>
);
// note: npm run deploy to create production build for gh-pages.