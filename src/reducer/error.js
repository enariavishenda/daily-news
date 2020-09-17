const authError = (state, action) => {
    if (state === undefined) {
        return {}
    }
    switch (action.type) {
        case 'LOGIN_ERROR':
            return {
                loginError: 'Неверный логин'
            }
        case 'PASSWORD_ERROR':
            return {
                passwordError: 'Неверный пароль'
            }
        case 'USERS_ERROR':
            return {
                loginError: 'Нет доступа к списку пользователей'
            }
        case 'CLEAR':
            return
        default:
            return state.error
    }
}

export default authError