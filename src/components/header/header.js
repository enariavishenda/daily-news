import React, {Component} from "react";
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

import './header.css'

class Header extends Component {

    onLogout = (e) => {
        e.preventDefault()
    }
    render () {
        // const {} = this.props

        const authLinks = (
            <form className="form-inline my-2 my-lg-0">
                <a href="" className="btn btn-primary my-2 my-sm-0" onClick={this.onLogout}>
                    Выйти
                </a>
            </form>
        )
        const guestLinks = (
            <form className="form-inline my-2 my-lg-0">
                <Link to='/login'>
                    <button className="btn btn-primary my-2 my-sm-0"
                            type="submit">Войти</button>
                </Link>
            </form>
        )

        const createNews = (
            <li className="nav-item">
                <Link className="nav-link" to="/user">Поделиться новостью</Link>
            </li>
        )

        const adminBoard = (
            <li className="nav-item">
                <Link className="nav-link" to="/admin">Администрирование</Link>
            </li>
        )
        return (
            <nav className="nav navbar navbar-expand-lg navbar-dark bg-primary fonts-head">
                <Link className="navbar-brand"
                      to="/">Daily News</Link>
                <button className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarColor03"
                        aria-controls="navbarColor03"
                        aria-expanded="true"
                        aria-label="Toggle navigation">
                </button>
                <div className="collapse navbar-collapse"
                     id="navbarColor03">
                    <ul className="navbar-nav mr-auto">
                        <ul className="nav-pills nav-item">
                            <Link className="nav-link" to="/news">Новости</Link>
                        </ul>
                    </ul>
                    <ul className="navbar-nav mr-auto">
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Искать новости"/>
                            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Поиск</button>
                        </form>
                    </ul>
                    <ul className="navbar-nav mr-auto">
                        { createNews }
                        { adminBoard }
                    </ul>
                    { authLinks }
                    { guestLinks }
                </div>
            </nav>
        )
    }
}


const mapStateToProps = () => {
    return {

    }
}

export default connect(mapStateToProps, {})(withRouter(Header))