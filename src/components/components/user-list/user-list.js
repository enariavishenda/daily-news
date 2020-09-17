import React from "react";

import './user-list.css';

const UserList = ({news, state, login, addNews, inputChange}) => {

    return (<React.Fragment>
            <h3>Ваши записи</h3>
            <form onSubmit={addNews}>
                <input type="text"
                       id="title"
                       className=""
                       placeholder="Название"
                       name="title"
                       onChange={inputChange}
                       value={state.title}/>
                <input
                    type="text"
                    id="text"
                    className=""
                    placeholder="Содержимое"
                    name="text"
                    onChange={inputChange}
                    value={state.text}/>
                <input type="submit" className="" value="Опубликовать"/>
            </form>
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
        </React.Fragment>
    )
}

export default UserList