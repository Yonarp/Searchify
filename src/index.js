import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {StateProvider} from './State/stateprovider.component';
import {reducer , initialState} from './State/reducer.component';

ReactDOM.render(
  <BrowserRouter>
  <StateProvider reducer={reducer} initialState = {initialState}>
    <App />
    </StateProvider>
  </BrowserRouter>
,
  document.getElementById('root')
);

