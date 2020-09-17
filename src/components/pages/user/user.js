import React from "react"

import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import compose from "../../hoc/compose";
import withUser from "../../hoc/with-user";
import {createNews} from "../../../actions";
import UserList from "../../components/user-list/user-list";

const UserPage = ({...props}) => {

    const {news, addNews, login, inputChange, state, create} = props
    if (!create) {
        return ''
    }
    return (
        <div className="card bg-light mb-3">
            <div className="card-header"><h3>Напишите свою новость</h3></div>
            <UserList news={news}
                      state={state}
                      login={login}
                      addNews={addNews}
                      inputChange={inputChange}
            />
        </div>
    )
}

const mapStateToProps = ({news: {news, error, loading}, login: {user:{login}}, auth:{create}}) => {
    return {
        news,
        error,
        loading,
        login,
        create
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