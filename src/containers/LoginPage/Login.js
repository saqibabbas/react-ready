import React from 'react';
import LoginForm from './LoginForm';
import { authProvider } from '../../utils';

class Login extends React.Component {
    componentDidMount() {
        this.login = this.login.bind(this);
    }

    async login(e) {
        try {
            e.preventDefault();
            await authProvider.login({});
            // history.push('/dashboard');
            // eslint-disable-next-line no-empty
        } catch (error) {}
    }

    render() {
        return <LoginForm login={this.login} />;
    }
}

export default Login;
