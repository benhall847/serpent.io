import React from "react";
import ReactDOM from "react-dom";
import globalContext from "globalContext";

import App from "./App";

const title = "My Minimal React Webpack Babel Setup";

ReactDOM.render(<App title={globalContext} />, document.getElementById("app"));

module.hot.accept();
