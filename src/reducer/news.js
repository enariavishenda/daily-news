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
                news: addNewsList(state, action.payload),
                loading: false,
                error: false
            }
        case 'UPDATE_NEWS':
            return {
                news: [],
                loading: false,
                error: false
            }
        case 'DELETE_NEWS':
            return {
                news: delNewsList(state, action.payload),
                loading: false,
                error: false
            }
        default:
            return state.news
    }
}

const addNewsList = (state, addNews) => {
    const {news: {news}} = state
    return [...news, addNews]
}

const delNewsList = (state, delNewsId) => {
    const {news: {news}} = state
    const id_i = news.findIndex(({id}) => id === delNewsId);
    return [...news.slice(0, id_i), ...news.slice(id_i + 1)]

}



export default updateNews