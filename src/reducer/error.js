const authError = (state, action) => {
    if (state === undefined) {
        return {}
    }
    switch (action.type) {
        case 'LOGIN_ERROR':
            return 'Неверный логин'
        case 'PASSWORD_ERROR':
            return 'Неверный пароль'
        case 'USERS_ERROR':
            return 'Нет доступа к списку пользователей'
        case 'CLEAR':
            return
        default:
            return state.error
    }
}

export default authError