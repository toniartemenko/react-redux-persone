import React, {Component} from 'react'
import SignInForm from '../auth/SigninForm';

class AuthPage extends Component{
    static propTypes = {

    }

    render() {
        return (
            <div>
                <h1>Auth page</h1>
                <SignInForm />
            </div>
        )
    }

}

export default AuthPage;