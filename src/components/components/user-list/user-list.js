import React from "react";

import './user-list.css';

const UserList = ({news, state, login, addNews, inputChange}) => {

    return (<React.Fragment>
            <form onSubmit={addNews} className="input-form">
                <input type="text"
                       id="title"
                       className="form-control"
                       placeholder="Название"
                       name="title"
                       onChange={inputChange}
                       value={state.title}/>
                <textarea
                    type="text"
                    id="text"
                    className="form-control"
                    placeholder="Содержимое"
                    rows="6"
                    name="text"
                    onChange={inputChange}
                    value={state.text}/>
                <input type="submit" className="btn btn-primary btn-lg" value="Опубликовать"/>
            </form>
            <div>
                <div className="card bg-light mb-3">
                    <div className="card-header"> <h3>Ваши записи</h3></div>
                    <div className="card-body">
                        {
                            news.filter((item) => item.author === login).map((item) => {
                                const {title, text, date} = item
                                const options = {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                    weekday: 'long',
                                    timezone: 'UTC',
                                    hour: 'numeric',
                                    minute: 'numeric',
                                    second: 'numeric'};
                                return (
                                    <li key={item.id} className="news-li">
                                        <div className="news-list-item">
                                            <div className="news-details">
                                                <div className="news-title">{title}</div>
                                                <div className="news-text">{text}</div>
                                                <div className="news-data">{date.toLocaleString("ru", options)}</div>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })}
                    </div>
                </div>
            </div>


        </React.Fragment>
    )
}

export default UserList