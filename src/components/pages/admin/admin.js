import React from "react"


import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import compose from "../../hoc/compose";
import withAdmin from "../../hoc/with-admin";
import AdminList from "../../components/admin-list/admin-list";
import {getNews, approveNews, deleteNews} from "../../../actions";


const AdminPage = ({...props}) => {

    const {news, updNews, delNews} = props

    return (
        <div className="jumbotron text-center">
            <h3>Страница администратора</h3>
            <AdminList news={news}
                       delNews={delNews}
                       updNews={updNews}
            />
        </div>
    )
}

const mapStateToProps = ({news: {news, error, loading} }) => {
    return {
        news,
        error,
        loading
    }
}

const mapDispatchToProps = (dispatch) => () => {
    return  bindActionCreators({
        getNews: getNews,
        approveNews: approveNews,
        deleteNews: deleteNews
    }, dispatch)
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAdmin
)(AdminPage)