import React from 'react';
import Button from './Button';

function Login() {
    return (
        <div className='registerContainer cont'>
            <div className='login'>
                <h1>Login</h1>
            </div>

            <label>Nicky</label>
            <br />
            <input type='text' />
            <br /> <br />
            <label>Password</label>
            <br />
            <input type='password' />

            <br /><br /><br />

            <Button 
            button = "Login"
            />

        </div>
    )
}

export default Login;