import React from "react"


import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import compose from "../../hoc/compose";
import withAdmin from "../../hoc/with-admin";
import AdminList from "../../components/admin-list/admin-list";
import {getNews, approveNews, deleteNews} from "../../../actions";


const AdminPage = ({...props}) => {

    const {news, updNews, delNews, update} = props
    if (!update) {
        return ''
    }
    return (
        <div className="card bg-light mb-3">
            <div className="card-header"><h3 className="text-center" >Страница администратора</h3></div>
            <div className="card-body">
                <AdminList news={news}
                       delNews={delNews}
                       updNews={updNews}
            />
            </div>
        </div>
    )
}

const mapStateToProps = ({news: {news, error, loading}, auth:{update} }) => {
    return {
        news,
        error,
        loading,
        update
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