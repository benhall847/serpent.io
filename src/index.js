import React from "react";
import ReactDOM from "react-dom";
import App from "App";
import Provider from "core/Provider/index";

ReactDOM.render(
    <Provider>
        <App />
    </Provider>,
    document.getElementById("app")
);

module.hot.accept();
