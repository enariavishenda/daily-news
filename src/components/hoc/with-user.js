import React, {Component} from 'react';
import Loading from "../loading";
import Error from "../error-indicator";

const withUser = (View) => {

    return class extends Component {

        maxId = 100

        state = {
            title: '',
            text: '',
        }

        inputChange = (label) => {
            this.setState({
                [label.target.name]: label.target.value
            })
        }

        inputSubmit = (label) => {
            label.preventDefault()
            const {login} = this.props
            const {title, text} = this.state
            const newNews = {
                id: this.maxId++,
                title,
                text,
                date: new Date(),
                author: login,
                done: false
            }
            this.props.createNews(newNews)
        }

        render() {
            const {news, loading, error, login, create} = this.props
            if (loading) {
                return <Loading/>
            }
            if (error) {
                return <Error/>
            }
            return <View news={news}
                         state = {this.state}
                         login={login}
                         addNews={this.inputSubmit}
                         inputChange={this.inputChange}
                         create={create}
            />
        }
    }
}
export default withUser