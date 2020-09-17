import React, {Component} from "react";

const withNews = (View) => {

    return class extends Component {
        render() {
            const {news, search} = this.props
            return <View news={news} search={search}/>
        }
    }
}
export default withNews