import updateNews from "./news";
import authLogin from "./login";
import authReducer from "./auth";
import authError from "./error";

const reducer = (state, action) => {
    return {
        news: updateNews(state, action),
        login: authLogin(state, action),
        auth: authReducer(state, action),
        error: authError(state, action)
    }
}

export default reducer