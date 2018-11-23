import React from "react";
import { Switch } from "react-router";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Routes from "routes";
import { loadProgressBar } from "axios-progress-bar";
import "regenerator-runtime/runtime";
import store from "store";
import "axios-progress-bar/dist/nprogress.css";
import './index.css';

loadProgressBar({ showSpinner: false });

export default () => (
    <BrowserRouter>
        <Provider store={store}>
            <Switch>{Routes}</Switch>
        </Provider>
    </BrowserRouter>
);