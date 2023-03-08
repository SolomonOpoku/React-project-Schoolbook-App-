import React from "react";
import { Link } from 'react-router-dom'

function FirstPage() {
    return (
        <div class="fPage">

            <div class="brand">
                <img src="/images/brand.png" alt="Schoolbook" class="center" />

                <p class="inside">Made with Love by Jhoker</p>
            </div>

            <p class="pa">Best place to post your school pics</p>

            <div class="button">
                <Link to="/register"><button type="submit" class="firstPage register">Register</button></Link>
                <Link to="/login" ><button type="submit" class="firstPage login">Login</button></Link>
                <Link to="/#" ><button type="submit" class="firstPage facebook">Register with Facebook</button></Link>
            </div>
        </div>
    )
}

export default FirstPage;