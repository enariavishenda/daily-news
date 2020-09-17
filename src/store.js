import reducer from "./reducer";
import {createStore, compose, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import {createNews,getNews, isUser} from "./actions";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middleware = composeEnhancer(applyMiddleware(thunkMiddleware))

const store = createStore(reducer, middleware)

store.dispatch(getNews(
        [
            {id: 10, title: 'Погода', text: 'Графики Таблица Текст. ночью. В Москве ожидается пасмурная погода...',date: new Date(), author: 'Кто-то', done: false},
            {id: 20, title: 'Улетели птицы', text:'Осень — время, когда можно наблюдать стаи перелётных птиц, отправляющихся в тёплые страны. Куда улетают птицы на зиму, и каких именно птиц относят к перелётным? Птиц, которые предпочитают оставаться на зиму в своём регионе, называют оседлыми. В их числе — голуби, воробьи, синицы, а клесты способны выводить потомство при самых сильных...',date: new Date(), author: 'NoName', done: true},
            {id: 30, title: 'Будет ли теплая зима?', text: 'Все мы задаемся вопросом, как избежать переохлождения...',date: new Date(), author: 'NoName', done: false},
            {id: 40, title: 'Морозный холод', text: 'Мороз не может быть холодным ни в каком плане, потому что холодным может быть или предмет (в прямом, физическом смысле слова "холодный"), или действие (в переносном смысле - например, "холодная встреча", "холодный взгляд"). А мороз - это абстрактное понятие, характеристика погоды, климата. Погода может быть как холодной, так и морозной. "Холодный" и "морозный" - это близкие, почти синонимичные понятия. ',date: new Date(), author: 'NoName', done: true},
        ]
    ))

store.dispatch(createNews({id: 50, title: 'очень холодна', text:'Ежегодно на зимовку улетают птицы...',date: new Date(), author: 'Женя', done: false}))


export default store