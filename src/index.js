import React from "react";
import ReactDOM from "react-dom";
import { createStore } from 'redux';
import App from "./App";
import reducer from './reducer';
import { Provider } from 'react-redux';

const rootElement = document.getElementById("root");
const store = createStore(reducer);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App>
      </App>
    </Provider>
  </React.StrictMode>,
  rootElement
);
