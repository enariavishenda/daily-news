import isEmpty from "../utils/is-empty";

const authLogin = (state, action) => {
    if (state === undefined) {
        return {
            isAuth: false,
            user: {}
        }
    }
    switch (action.type) {
        case 'CURRENT_USER':
            return {
                isAuth: !isEmpty(action.payload),
                user: action.payload
            }
        default:
            return state.login
    }
}

export default authLogin