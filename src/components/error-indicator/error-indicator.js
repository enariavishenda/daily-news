import React from "react";

import icon from './0.png'
import './error-indicator.css'

const Error = () => {
    return (
        <div className="error">
            <span>
                <img src={icon} alt="error" className="icon_1"/>
            </span>
            <div className="alert alert-dismissible alert-danger">
                <strong>Что то пошло не так, сервис недоступен</strong>
            </div>
        </div>
    )
}

export default Error