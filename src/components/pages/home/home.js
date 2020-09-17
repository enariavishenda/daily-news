import React from "react";
import compose from "../../hoc/compose";
import {connect} from "react-redux";
import withHello from "../../hoc/with-hello";

const HomePage = ({...props}) => {
    const { login } = props
    return (
        <div className="jumbotron">
            <h1 className="display-3">Привет, { login ? `${login}!` : 'Гость!'}</h1>
            <span className="lead">Новостная лента о политике, спорте, науке, культуре и др.</span>
            <h3 className="my-4">
                <span>Новости сегодня: самые актуальные новости России и мира. Фото и видео. Комментарии, мнения и оценки. Происшествия, события шоу-бизнеса, спорта и мира науки. Новинки автопрома. Погода и курсы валют.</span>
            </h3>
        </div>
    )
}

const mapStateToProps = ({login: {user:{login}}}) => {
    return {
        login
    }
}

export default compose(
    connect(mapStateToProps),
    withHello)(HomePage)