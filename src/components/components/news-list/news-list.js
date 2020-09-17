import React from "react";

const NewsList = ({news, search}) => {

    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        timezone: 'UTC',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'};

    const filterSearch = (data, term) => {
        if (term.lenght === 0){
            return data
        }
        else return data.filter((item) => {
            return (item.title.toLowerCase().indexOf(term.toLowerCase()) > -1 ||
                item.text.toLowerCase().indexOf(term.toLowerCase()) > -1 ||
                item.date.toLocaleString("ru", options).toLowerCase().indexOf(term.toLowerCase()) > -1)
        })
    }

    return (<React.Fragment>
            {
                filterSearch(news,search).filter((item) => item.done === true).map((item) => {
                    const {title, text, date} = item
                    return (
                        <li key={item.id} className="jumbotron news-li">
                            <blockquote className="blockquote news-list-item">
                                <div className="news-details">
                                    <h3 className="news-title">{title}</h3>
                                    <div className="mb-0">{text}</div>
                                    <div className="blockquote-footer news-data">{date.toLocaleString("ru", options)}</div>
                                    <div className="news-list">
                                    </div>
                                </div>
                            </blockquote>
                        </li>
                    )
                })}
        </React.Fragment>
    )
}
export default NewsList