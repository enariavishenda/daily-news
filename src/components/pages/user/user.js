import React from "react"

import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import compose from "../../hoc/compose";
import withUser from "../../hoc/with-user";
import {createNews} from "../../../actions";
import UserList from "../../components/user-list/user-list";

const UserPage = ({...props}) => {

    const {news, addNews, login, inputChange, state} = props
    return (
        <div className="jumbotron text-center">
            <h3>Напишите свою новость</h3>
            <UserList news={news}
                      state={state}
                      login={login}
                      addNews={addNews}
                      inputChange={inputChange}
            />
        </div>
    )
}

const mapStateToProps = ({news: {news, error, loading}, login: {user:{login}}}) => {
    return {
        news,
        error,
        loading,
        login,
    }
}

const mapDispatchToProps = (dispatch) => () => {
    return  bindActionCreators({
        createNews: createNews
    }, dispatch)
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withUser
)(UserPage)