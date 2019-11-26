import React from 'react';
import App from './containers/App'
import { BrowserRouter } from 'react-router-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';

const store = configureStore();

export default () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
}