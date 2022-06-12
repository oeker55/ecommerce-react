import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"
import logger from "redux-logger"
import { Provider } from "react-redux"
import {configureStore } from "@reduxjs/toolkit"
import laptopReducer from "./reducers/laptopReducer"
import {BrowserRouter }from "react-router-dom"






const myStore = configureStore(

  {
   reducer :{
       
       laptops:laptopReducer
   } ,
   middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(logger)
  }
 )







const root = ReactDOM.createRoot(document.getElementById('root'));
//  myStore.dispatch({
//   type:"FETCH_ALL_LAPTOPS",
//    payload:[1,2,3,4,5,6]
//  })
root.render(
  <BrowserRouter>
    <Provider store={myStore}> 
  {/* <React.StrictMode> */}
    <App />
  {/* </React.StrictMode>  */}
    </Provider>
    </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
