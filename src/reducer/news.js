const updateNews = (state, action) => {

    if (state === undefined){
        return {
            news: [],
            loading: true,
            error: null,
        }
    }

    switch (action.type) {
        case 'NEWS_REQUEST':
            return {
                news: [],
                loading: true,
                error: false
            }
        case 'NEWS_SUCCESS':
            return {
                news: action.payload,
                loading: false,
                error: false
            }
        case 'NEWS_FAILURE':
            return {
                news: [],
                loading: false,
                error: action.payload
            }
        case 'ADD_NEWS':
            return {
                news: addNewsItem(state, action.payload),
                loading: false,
                error: false
            }
        case 'APPROVE_NEWS':
            return {
                news: approveNewsItem(state, action.payload),
                loading: false,
                error: false
            }
        case 'DELETE_NEWS':
            return {
                news: delNewsItem(state, action.payload),
                loading: false,
                error: false
            }
        default:
            return state.news
    }
}

const addNewsItem= (state, addNews) => {
    const {news: {news}} = state
    return [...news, addNews]
}

const delNewsItem = (state, delNewsId) => {
    const {news: {news}} = state
    const id_i = news.findIndex(({id}) => id === delNewsId);
    return [...news.slice(0, id_i), ...news.slice(id_i + 1)]

}

const toggleProperty = (arr, id, propName) => {
    const id_i = arr.findIndex((el) => el.id ===id)
    const oldItem = arr[id_i]
    const newItem = {...oldItem,
        [propName]: !oldItem[propName]}
    return [...arr.slice(0, id_i), newItem, ...arr.slice(id_i+1)]
}

const approveNewsItem = (state, approveNewsId) => {
    const {news: {news}} = state
    return toggleProperty(news, approveNewsId,'done')
}

export default updateNews