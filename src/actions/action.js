import correctUser from "../utils/is-user";

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

export const loginError = () => {
    return {
        type: 'LOGIN_ERROR'
    }
}
export const passwordError = () => {
    return {
        type: 'PASSWORD_ERROR'
    }
}

export const isUser = (user) => (dispatch) => {
    const users = [['Admin', '54321', true], ['Женя','12345']]
    correctUser(user, dispatch, ...users[0])
}
