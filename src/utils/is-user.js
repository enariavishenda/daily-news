import {authCreate, authUpdate, logIn, loginError, passwordError} from "../actions";

const correctUser = (user, dispatch, login, password, admin) => {
    switch (user.login) {
        case login:
            switch (user.password) {
                case password:
                    dispatch(logIn(user))
                    dispatch(admin ? authUpdate() : authCreate())
                    break
                default:
                    dispatch(passwordError())
                    break
            }
            break
        default: dispatch(loginError())
    }
}

export default correctUser