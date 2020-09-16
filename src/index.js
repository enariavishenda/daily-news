import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import store from "./store";

import './index.css';

import App from './components/app';
import ErrorBoundry from "./components/error-boundry";

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <App />
        </ErrorBoundry>
    </Provider>,
  document.getElementById('root')
);