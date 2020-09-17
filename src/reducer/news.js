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
            return addNewsList(state, action.payload)
        case 'UPDATE_NEWS':
            return {
                news: [],
                loading: false,
                error: false
            }
        case 'DELETE_NEWS':
            return {
                news: [],
                loading: false,
                error: false
            }
        default:
            return state.news
    }
}

const addNewsList = (state, addNews) => {

    const {news: { news } } = state

    return {
        news: news,
        loading: false,
        error: false
    }
}

export default updateNews