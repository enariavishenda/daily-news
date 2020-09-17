import React from "react";
import compose from "../../hoc/compose";
import {connect} from "react-redux";
import withNews from "../../hoc/with-news";
import NewsList from "../../components/news-list/news-list";


const NewsPage = ({...props}) => {
    const {news, search} = props
    return (
        <NewsList news={news} search={search}/>
    )
}
const mapDispatchToProps = ({news:{news}, search}) => {
    return {news, search}
}

export default compose(
    connect(mapDispatchToProps),
    withNews)(NewsPage)