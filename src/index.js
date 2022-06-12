import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import logger from "redux-logger";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import laptopReducer from "./reducers/laptopReducer";
import { BrowserRouter } from "react-router-dom";


const myStore = configureStore({
  reducer: {
    laptops: laptopReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Provider store={myStore}>
      {/* <React.StrictMode> */}
      <App />
      {/* </React.StrictMode>  */}
    </Provider>
  </BrowserRouter>
);
