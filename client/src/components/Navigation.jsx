import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <div className='navContainer'>
            <ul className='navlinks'>
                <li><Link to="/home"><i class="fa fa-home"></i>Home</Link></li>
                <li><Link to="/profile"><i class="fa fa-user-circle-o"></i>Profile</Link></li>
                <li><Link to="/post"><i class="fa fa-image"></i>Post</Link></li>
            </ul>

        </div>
    )
}

export default Navigation;