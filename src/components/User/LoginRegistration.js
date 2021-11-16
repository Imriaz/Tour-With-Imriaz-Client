import React from 'react';
import './LoginRegistration.css'
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';

const LoginRegistration = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    console.log('Came from: ', location.state?.from);
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleSignin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    return (
        <div className='login-section'>
            <h1>Please Login</h1>
            <button onClick={handleGoogleSignin} className="btn btn-info">Google Sign In</button>
        </div>
    );
};

export default LoginRegistration;