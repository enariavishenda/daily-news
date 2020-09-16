const authReducer = (state, action) => {
    if (state === undefined) {
        return {
            create: false,
            update: false
        }
    }
    switch (action.type) {
        case 'AUTH_USER':
            return {
                create: true,
                update: false
            }
        case 'AUTH_ADMIN':
            return {
                create: false,
                update: true
            }
        default:
            return state.auth
    }
}

export default authReducer