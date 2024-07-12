import React from 'react';
import { useNavigate } from "react-router-dom";


export default function Login() {
    const navigate = useNavigate();

    const handleHome = () => {
        navigate('/');
    }

    const handleLogin = () => {
        navigate('/login');
    }

    const handleSignin = () => {
        navigate('/signin');
    }

    return (
        <div className="loginContainer">
            <div className="navbar">
                <div className="navItem" onClick={handleHome}>HOME</div>
                <div className="navItem" onClick={handleLogin}>LOGIN</div>
                <div className="navItem" onClick={handleSignin}>SIGNIN</div>
            </div>
            <div className="loginForm">
                <form>
                    <h1>Login</h1>
                    <label>Username:</label>
                    <input type="text" className="username" /><br />
                    <label>Password:</label>
                    <input type="password" className="password" /><br />
                    <input type="submit" value="Login" />
                </form>
            </div>
        </div>
    );
}
