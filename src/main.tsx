/// <reference types="vite-plugin-svgr/client" />

import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
// eslint-disable-next-line import/no-unresolved,@typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import App from '@portfolio/App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
