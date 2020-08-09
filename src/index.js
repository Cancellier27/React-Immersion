import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom'
import Home from './App';

ReactDOM.render(
  <BrowserRouter>
    <switch>
      
      {/* <Route path="/" component={App} /> */}
      <Home />

    </switch>
  </BrowserRouter>,
  document.getElementById('root')
);

