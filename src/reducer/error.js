const authError = (state, action) => {
    if (state === undefined) {
        return {}
    }
    switch (action.type) {
        case 'LOGIN_ERROR':
            return 'Неверный логин'
        case 'PASSWORD_ERROR':
            return 'Неверный пароль'
        default:
            return state.error
    }
}

export default authError