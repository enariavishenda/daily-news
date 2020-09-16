import {authCreate, authUpdate, logIn, loginError, passwordError} from "../actions";

const correctUser = (user, dispatch, getState, itemlogin, itempassword, itemadmin) => {
    switch (user.login) {
        case itemlogin:
            switch (user.password) {
                case itempassword:
                    dispatch(logIn(user))
                    dispatch(itemadmin ? authUpdate() : authCreate())
                    break
                default:
                    dispatch(passwordError())
            }
            break
        default:
        {
            if (typeof getState().error === 'string' || getState().error instanceof String)
            {
                if (getState().login.isAuth) {
                    console.log('1')
                }
                console.log('2')
            }
            if (!(typeof getState().error === 'string' || getState().error instanceof String)) {
                console.log('3')
                dispatch(loginError())
            }
        }
    }
}

export default correctUser