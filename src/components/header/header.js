import React, {Component} from "react";
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom';

import './header.css'
import {bindActionCreators} from "redux";
import {isUser, outLogin, seeSearch} from "../../actions";

class Header extends Component {

    state = {
        login: '',
        password: '',
        close: false
    }


    filterChange = (event) => {
        this.props.seeSearch(event.target.value)
    }

    inputChange = (label) => {
        this.setState({
            [label.target.name]: label.target.value
        })
    }

    onLogout = (e) => {
        e.preventDefault()
        this.props.outLogin()
    }
    onLogin = (e) => {
        e.preventDefault()
        this.props.isUser({
            login: this.state.login,
            password: this.state.password
        })
        if (!this.props.passwordError || !this.props.loginError) {
            this.setState({
                close: true
            })
        }
        else {
            this.setState({
                close: false
            })
        }

    }


    render() {

        const {create, update, isAuth, passwordError, loginError} = this.props

        const authLinks = (
            <form className="form-inline my-2 my-lg-0">
                <a href="#" className="btn btn-primary my-2 my-sm-0" onClick={this.onLogout}>
                    Выйти
                </a>
            </form>
        )

        const guestLinks = (
            <div className="bd-example">
                <button type="button"
                        className="btn btn-primary"
                        data-toggle="modal"
                        data-target="#Modal">Войти
                </button>
                <div className="modal fade"
                     id="Modal"
                     tabIndex="-1"
                     role="dialog"
                     aria-labelledby="exampleModalLabel"
                     aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-body formgroup">
                                <h2 className="h2">Введите логин и пароль</h2>
                                <form onSubmit={this.onLogin}>
                                    <label htmlFor="login">Логин</label>
                                    <input type="text"
                                           id="login"
                                           className="form-control"
                                           placeholder="login"
                                           name="login"
                                           onChange={this.inputChange}
                                           value={this.state.login}/>
                                    {loginError && (<div className="text-danger">{loginError}</div>)}
                                    <label htmlFor="password">Пароль</label>
                                    <input
                                        type="password"
                                        id="password"
                                        className="form-control"
                                        placeholder="password"
                                        name="password"
                                        onChange={this.inputChange}
                                        value={this.state.password}/>
                                    {passwordError && (<div className="text-danger">{passwordError}</div>)}
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary text-center" id="cancel-btn"
                                        data-dismiss="modal">Отмена
                                </button>
                                <button type="button" className="btn btn-primary text-center"
                                        data-dismiss={this.state.close ? 'modal' : ''} onClick={this.onLogin}>Войти
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
                    <span className="navbar-toggler-icon"> </span>
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
                            <input className="form-control mr-sm-2"
                                   type="text"
                                   placeholder="Искать новости"
                                   onChange={this.filterChange}/>
                        </form>
                    </ul>
                    <ul className="navbar-nav mr-auto">
                        {create && isAuth ? createNews : null}
                        {update && isAuth ? adminBoard : null}
                    </ul>
                    {isAuth ? authLinks : guestLinks}
                </div>
            </nav>
        )
    }
}


const mapStateToProps = ({auth: {create, update}, search, login: {isAuth}, error: {loginError, passwordError}}) => {
    return {
        isAuth,
        create,
        update,
        search,
        loginError,
        passwordError
    }
}
const mapDispatchToProps = (dispatch) => () => {
    return bindActionCreators({
        seeSearch: seeSearch,
        outLogin: outLogin,
        isUser: isUser
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header))