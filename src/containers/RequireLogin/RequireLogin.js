import React from 'react';
import PropTypes from 'prop-types';
import {requestApi} from '../../apis/requestApi'
import {apiCheckIfLogin} from '../../apis/user'

class RequireLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            isLogin: false
        };
    }

    componentDidMount() {
        requestApi(apiCheckIfLogin)
        .then(res => {
            console.log(res)
            this.setState({loading: false, isLogin: true})
        })
        .catch(err => {
            console.log(err);
            this.setState({loading: false, isLogin: false})
        })
    }

    render() {
        if(this.state.loading) {
            return <div>Loading</div>
        }

        if(this.state.isLogin) {
            return <div>Logined</div>
        }

        return (
            <div>Not Loggin</div>
        );
    }
}

RequireLogin.propTypes = {};

export default RequireLogin;
