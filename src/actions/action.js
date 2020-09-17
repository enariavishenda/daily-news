import correctUser from "../utils/is-user";
import UsersService from "../services/users";

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

export const getNews = (news) => (dispatch) => {
    dispatch(newsRequested())
    dispatch(newsLoaded(news))
}

export const createNews = (addNews) => {
    return {
        type: 'ADD_NEWS',
        payload: addNews
    }
}

export const approveNews = (approveNewsId) => {
    return {
        type: 'APPROVE_NEWS',
        payload: approveNewsId
    }
}

export const deleteNews = (delNewsId) => {
    return {
        type: 'DELETE_NEWS',
        payload: delNewsId
    }
}

export const logIn = (user) => {
    return {
        type: 'CURRENT_USER',
        payload: user
    }
}

export const outLogin = () => (dispatch) => {
    dispatch(authClear())
    dispatch(logIn({}))
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

export const authClear = () => {
    return {
        type: 'AUTH_CLEAR'
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

export const usersError = (error) => {
    return {
        type: 'USERS_ERROR',
        payload: error
    }
}

export const isUser = (user) => (dispatch, getState) => {
    const users = new UsersService()
    users.getUsers()
        .then((data) => data.map((item) => {
            if (!getState().login.isAuth)
                return correctUser(user, dispatch, getState, item.login, item.password, item.admin)
        }))
            .catch((err) => {
                console.log(err)
                dispatch(usersError())
            })
}

export const seeSearch = (search) =>  {
    return {
        type: 'SEARCH',
        payload: search
    }
}