import reducer from "./reducer";
import {createStore, compose, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import {authCreate, isUser} from "./actions/action";

const logMiddleware = ({getState}) => (next) => (action) => {
    console.log(action.type, getState())
    return next(action)
}

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middleware = composeEnhancer(applyMiddleware(thunkMiddleware,logMiddleware))

const store = createStore(reducer, middleware)

store.dispatch(isUser({login:'Admin', password: '54321'}))

export default store