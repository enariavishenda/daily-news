import reducer from "./reducer";
import {createStore, compose, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import {createNews, deleteNews, getNews} from "./actions";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middleware = composeEnhancer(applyMiddleware(thunkMiddleware))

const store = createStore(reducer, middleware)

store.dispatch(getNews(
        [
            {id: 10, title: 'Погода', text: 'Графики Таблица Текст. ночью. В Москве ожидается пасмурная погода...',date: new Date(), author: 'NoName', done: true},
            {id: 20, title: 'Улетели птицы', text:'Ежегодно на зимовку улетают птицы...',date: new Date(), author: 'NoName', done: true},
            {id: 30, title: 'Будет ли теплая зима?', text: 'Все мы задаемся вопросом, как избежать переохлождения...',date: new Date(), author: 'NoName', done: true},
            {id: 40, title: 'ghfghfghfgh', text: 'Все мы задаемся вопросом, как избежать переохлождения...',date: new Date(), author: 'NoName', done: true},
        ]
    ))

store.dispatch(createNews({id: 50, title: 'очень холодна', text:'Ежегодно на зимовку улетают птицы...',date: new Date(), author: 'NoName', done: true}))

store.dispatch(deleteNews(10))

export default store