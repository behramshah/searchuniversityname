import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, applyMiddleware  } from 'redux';
import { Provider } from 'react-redux';
import reducer from './redux';
import thunk from "redux-thunk";

import './index.css';
import App from './App';

const store = createStore(reducer, applyMiddleware(thunk))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);