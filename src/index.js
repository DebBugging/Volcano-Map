import React from "react";
import ReactDOM from "react-dom";
import "./styles/css/index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

/* For work offline and load faster, changed unregister() to register() below. Note this comes with some pitfalls.
 Learn more about service workers: http://bit.ly/CRA-PWA */
serviceWorker.register();
