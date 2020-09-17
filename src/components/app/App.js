import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.css';

import Error from "../error-indicator";
import Footer from "../footer";
import HomePage from "../pages/home";
import Header from "../header/header";
import AdminPage from "../pages/admin/admin";
import UserPage from "../pages/user/user";
import NewsPage from "../pages/news/news";

function App() {
    return (
        <Router>
            <div className="content">
                <Header />
                <Switch>
                    <Route path="/" exact component={HomePage}/>
                    <Route path="/news" exact component={NewsPage}/>
                    <Route path="/admin" exact component={AdminPage}/>
                    <Route path="/user" exact component={UserPage}/>
                    <Route render={() => {
                        return (
                            <React.Fragment>
                                <Error/>
                            </React.Fragment>)
                    }}/>
                </Switch>
            </div>
                <Footer/>
        </Router>
    );
}

export default App;
