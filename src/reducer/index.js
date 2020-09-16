import updateNews from "./news";
import authLogin from "./login";
import authReducer from "./auth";

const reducer = (state, action) => {
    return {
        news: updateNews(state, action),
        login: authLogin(state, action),
        auth: authReducer(state, action)
    }
}

export default reducer