import React, { useEffect, useContext, useState } from 'react';
import "./Login.css"
import { signInWithGoogle } from "./services/firebase";
import { UserContext } from './providers/UserProvider';
import { Navigate } from 'react-router-dom';

export default function Login() {
    const user = useContext(UserContext);
    const [redirect, setRedirect] = useState(null);

    useEffect(() => {
        if (user) {
            setRedirect('/dashboard')
        }
    }, [user]);
    if (redirect != null) {
        return <Navigate to={redirect}/>;
    }

    return (
        <div className="login-buttons">
            <button className="login-provider-button" onClick={signInWithGoogle}>
                <img src="https://img.icons8.com/ios-filled/50/000000/google-logo.png" alt="google icon"/>
                <span> Continue with Google</span>
            </button>
        </div>
    );
}