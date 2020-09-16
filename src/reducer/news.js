const updateNews = (state, action) => {

    if (state === undefined){
        return {
            news: [],
            loading: true,
            error: null
        }
    }

    switch (action.type) {
        case 'NEWS_REQUEST':
            return {
                news: [],
                loading: true,
                error: null
            }
        case 'NEWS_SUCCESS':
            return {
                news: action.payload,
                loading: false,
                error: null
            }
        case 'NEWS_FAILURE':
            return {
                news: [],
                loading: false,
                error: action.payload
            }
        default:
            return state.news
    }

}

export default updateNews