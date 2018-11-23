import React from "react";
import { Switch } from "react-router";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Routes from "routes";
import { loadProgressBar } from "axios-progress-bar";
import "axios-progress-bar/dist/nprogress.css";
import "regenerator-runtime/runtime";
import store from "store";

loadProgressBar({ showSpinner: false });

export default () => (
    <BrowserRouter>
        <Provider store={store}>
            <Switch>{Routes}</Switch>
        </Provider>
    </BrowserRouter>
);
