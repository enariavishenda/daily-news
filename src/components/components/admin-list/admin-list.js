import React from "react";

import './admin-list.css';

const AdminList = ({news, delNews, updNews}) => {

    return (<React.Fragment>
            {
                news.filter((item) => item.done === false).map((item) => {
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
                                <div className="news-list">
                                    <button
                                        onClick={() => delNews(item.id)}
                                        className="btn btn-danger">Удалить
                                    </button>
                                    <button
                                        onClick={() => updNews(item.id)}
                                        className="btn btn-primary">Разрешить публикацию
                                    </button>
                                </div>
                            </div>
                        </div>
                    </li>
                )
            })}
        </React.Fragment>
    )
}

export default AdminList