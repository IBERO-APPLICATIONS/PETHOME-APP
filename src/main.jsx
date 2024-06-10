import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/MainStore';
import { PethomeApp } from './PethomeApp';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <PethomeApp />  
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
