import React from 'react';
import App from './containers/App'
import { BrowserRouter } from 'react-router-dom';


export default () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}