export const newsRequested = () => {
    return {
        type: 'NEWS_REQUEST'
    }
}

export const newsLoaded = (newNews) => {
    return {
        type: 'NEWS_SUCCESS',
        payload: newNews
    }
}


export const newsError = (error) => {
    return {
        type: 'NEWS_FAILURE',
        payload: error
    }
}

export const getNews = () => (dispatch) => {
    dispatch(newsRequested())
}

export const createNews = (addNews) => {
    return {
        type: 'UPDATE_NEWS',
        payload: addNews
    }
}

export const approveNews = (approveNews) => {
    return {
        type: 'UPDATE_NEWS',
        payload: approveNews
    }
}

export const deleteNews = (delNews) => {
    return {
        type: 'UPDATE_NEWS',
        payload: delNews
    }
}

export const logIn = (user) => {
    return {
        type: 'CURRENT_USER',
        payload: user
    }
}

export const authCreate = () => {
    return {
        type: 'AUTH_USER'
    }
}

export const authUpdate = () => {
    return {
        type: 'AUTH_ADMIN'
    }
}

