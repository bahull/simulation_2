import React from "react";
import ReactDOM from "react-dom";
import Router from "react-router";
import user_controller from "./components/user_controller";

import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
