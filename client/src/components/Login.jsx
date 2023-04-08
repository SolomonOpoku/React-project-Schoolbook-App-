import React from 'react';
import Button from './Button';

function Login() {
    return (
        <div className='registerContainer cont'>
            <div className='login'>
                <h1 id='register'>Login</h1>
            </div>

            <label className='registerLabel'>Nicky</label>
            <br />
            <input type='text' className="registerInputs"/>
            <br /> <br />
            <label className='registerLabel'>Password</label>
            <br />
            <input type='password' className="registerInputs"/>

            <br /><br /><br />

            <Button 
            button = "Login"
            />

        </div>
    )
}

export default Login;