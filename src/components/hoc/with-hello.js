import React, {Component} from 'react';

const withHello = (View) => {
    return class extends Component {
        render() {
            const {login} = this.props
            return <View login={login}/>
        }
    }
}

export default withHello