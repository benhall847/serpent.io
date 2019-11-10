import React from "react";
import ReactDOM from "react-dom";
import App from "App";
import UserProvider from "core/UserProvider/Provider/index";
import SnakeProvider from "core/SnakeProvider/Provider/index";

ReactDOM.render(
    <SnakeProvider>
        <UserProvider>
            <App />
        </UserProvider>
    </SnakeProvider>,
    document.getElementById("app")
);

module.hot.accept();
