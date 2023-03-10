import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <div className='navContainer'>
            <ul>
                <li><Link to="/home"><i class="fa fa-home"></i></Link></li>
                <li><Link to="/profile"><i class="fa fa-user-circle-o"></i></Link></li>
                <li><Link to="/post"><i class="fa fa-image"></i></Link></li>
            </ul>

        </div>
    )
}

export default Navigation;