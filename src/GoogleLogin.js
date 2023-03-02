import './googleLogin.css'
import React, { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import App from './App'

function GoogleLogin() {
    const [ user, setUser ] = useState(null);
    const [ profile, setProfile ] = useState(null);

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error),
    });

    useEffect(
        () => {
            if (user) {
                axios
                    .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: 'application/json'
                        }
                    })
                    .then((res) => {
                        setProfile(res.data);
                    })
                    .catch((err) => console.log(err));
            }
        },
        [ user ]
    );

    // log out function to log the user out of google and set the profile array to null
    const logOut = () => {
        googleLogout();
        setProfile(null);
        console.log('log out');
    };

    function onClick(){
        return login()
    }

    return (
        <div>
            {profile ? (
                <div>
                    <App />
                    <button onClick={logOut}>Log out</button>
                </div>
            ) : (
                <button onClick={onClick}>Sign in with Google 🚀 </button>
            )}
        </div>
    );
}
export default GoogleLogin;

//credit: https://blog.logrocket.com/guide-adding-google-login-react-app/