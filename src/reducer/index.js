import updateNews from "./news";
import authLogin from "./login";
import authReducer from "./auth";
import authError from "./error";
import seeSearch from "./search";

const reducer = (state, action) => {
    return {
        news: updateNews(state, action),
        login: authLogin(state, action),
        auth: authReducer(state, action),
        error: authError(state, action),
        search: seeSearch(state, action)
    }
}

export default reducer