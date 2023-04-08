import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <div className='navContainer'>
           <div className="header">
                <Link to="/"><img id='logo' src='/images/logo.png' alt='schoolbook logo'/></Link>  
            </div>
            
            <ul className='navlinks'>
                <li><Link to="/home"><i class="fa fa-home"></i><span>Home</span></Link></li>
                <li><Link to="/profile"><i class="fa fa-user-circle-o"></i><span>Profile</span></Link></li>
                <li><Link to="/post"><i class="fa fa-image"></i><span>Post</span></Link></li>
            </ul>

        </div>
    )
}

export default Navigation;