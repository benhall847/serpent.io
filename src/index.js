import React from "react";
import ReactDOM from "react-dom";
import globalContext from "globalContext";

import App from "./App";

ReactDOM.render(<App title={globalContext} />, document.getElementById("app"));

module.hot.accept();
