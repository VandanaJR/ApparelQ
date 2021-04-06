import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

//STORE IMPORTS
import {Provider} from 'react-redux'
import store from './state/store'


ReactDOM.render(

    <BrowserRouter >
      <Provider store={store()}>
        <App />
      </Provider>
    </BrowserRouter>,
  document.getElementById('root')
);


