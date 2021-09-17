import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "react-dates/lib/css/_datepicker.css";
import "react-dates/initialize";
import App from "./App";
import store from "./_redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
