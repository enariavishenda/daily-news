import reducer from "./reducer";
import { createStore, compose, applyMiddleware } from "redux";

const logMiddleware = ({getState}) => (next) => (action) => {
    console.log(action.type, getState())
    return next(action)
}

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middleware = composeEnhancer(applyMiddleware(logMiddleware))

const store = createStore(reducer, middleware)

export default store