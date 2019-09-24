import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import {reducer} from "./reducers"

import "./index.css";
import App from "./App";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const SAState = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk))
  );

ReactDOM.render(
    <Provider store={SAState}>
        <Router>
            <App />
        </Router>,
    </Provider>, document.getElementById("root")
);
