import React from 'react';
import ReactDOM from 'react-dom';
import MainRouter from './MainRouter';
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
      <React.StrictMode>
         <BrowserRouter>
             <MainRouter />
         </BrowserRouter> 
     </React.StrictMode> 
,document.getElementById("root"));
