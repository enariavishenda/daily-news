import {authCreate, authUpdate, logIn, loginError, passwordError} from "../actions";

const correctUser = (user, dispatch, getState, itemlogin, itempassword, itemadmin) => {
    switch (user.login) {
        case itemlogin:
            switch (user.password) {
                case itempassword:
                    dispatch({type: 'CLEAR'})
                    dispatch(logIn(user))
                    dispatch(itemadmin ? authUpdate() : authCreate())
                    break
                default:
                    dispatch({type: 'CLEAR'})
                    dispatch(passwordError())
            }
            break
        default:
        if (getState().error.password && !getState().login.isAuth) {return}
        else {dispatch(loginError())}
    }
}

export default correctUser