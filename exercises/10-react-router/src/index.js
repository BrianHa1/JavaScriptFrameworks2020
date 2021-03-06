/**
 * You will need to wrap React Router around your app.
 * Setup this page so that it is the same as "src/index.js" here
 * @see https://codesandbox.io/s/react-router-vij9b?fontsize=14&hidenavigation=1&theme=dark
 */

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, 
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
