import React from 'react';
import Button from './Button';

function Register() {
    return (
        <div className="registerContainer">
            <div className='register'>
                <h1>Register</h1>
            </div>
            <label>Name</label>
            <br />
            <input type='text' />

            <br /><br />
            <label>School</label>
            <br />
            <input type='text' />

            <br /><br />
            <label>Nicky</label>
            <br />
            <input type="text" />

            <br /><br />
            <label>Email</label>
            <br />
            <input type="email" />

            <br /><br />
            <label>Password</label>
            <br />
            <input type="password" />

            <br /><br />
            <label>Confirm Password</label>
            <br />
            <input type="password" />

            <br /> <br /> <br />

            <Button 
            button = "Register"
            />

        </div>
    )
}

export default Register;