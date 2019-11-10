import React from "react";
import ReactDOM from "react-dom";
import App from "App";
import { StateInspector } from "reinspect";
import UserProvider from "core/UserProvider/Provider/index";
import SnakeProvider from "core/SnakeProvider/Provider/index";

ReactDOM.render(
    <StateInspector>
        <SnakeProvider>
            <UserProvider>
                <App />
            </UserProvider>
        </SnakeProvider>
    </StateInspector>,
    document.getElementById("app")
);

module.hot.accept();
