import reducer from "./reducer";
import {createStore, compose, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import {getNews, seeSearch} from "./actions";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middleware = composeEnhancer(applyMiddleware(thunkMiddleware))

const store = createStore(reducer, middleware)

store.dispatch(getNews(
    {
    news:
        [
            {id: 1, title: 'Погода', text: 'Графики Таблица Текст. ночью. В Москве ожидается пасмурная погода...',date: new Date(), author: 'NoName', done: true},
            {id: 2, title: 'Улетели птицы', text:'Ежегодно на зимовку улетают птицы...',date: new Date(), author: 'NoName', done: true},
            {id: 3, title: 'Будет ли теплая зима?', text: 'Все мы задаемся вопросом, как избежать переохлождения...',date: new Date(), author: 'NoName', done: true},
        ]
    }))

export default store