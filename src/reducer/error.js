const authError = (state, action) => {
    if (state === undefined) {
        return {}
    }
    switch (action.type) {
        case 'LOGIN_ERROR':
            return {
                login: 'Неверный логин'
            }
        case 'PASSWORD_ERROR':
            return {
                password: 'Неверный пароль'
            }
        case 'USERS_ERROR':
            return {
                login: 'Нет доступа к списку пользователей'
            }
        case 'CLEAR':
            return
        default:
            return state.error
    }
}

export default authError