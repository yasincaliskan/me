import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import "./core/ui/typography/_typography.scss";
import "./core/ui/style/_align.scss";

import App from "./core/app/App";
import reportWebVitals from "./core/reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
