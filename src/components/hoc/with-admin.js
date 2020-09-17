import React, {Component} from 'react';
import Loading from "../loading";
import Error from "../error-indicator";

const withAdmin = (View) => {

    return class extends Component {

        buttonApprove = (id) => {
            this.props.approveNews(id)
        }
        buttonDelete = (id) => {
            this.props.deleteNews(id)
        }
        render() {
            const {news, loading, error, update} = this.props
            if (loading) {
                return <Loading/>
            }
            if (error) {
                return <Error />
            }
            return <View news={news}
                         updNews={this.buttonApprove}
                         delNews={this.buttonDelete}
                         update={update}
            />
        }
    }
}
export default withAdmin