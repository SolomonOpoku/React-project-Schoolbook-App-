import React from "react";
import { Link } from 'react-router-dom';
import Brand from "./Brand";

function FirstPage() {
    return (
        <div class="fPage">

            <Brand />

            <p class="firstPageParagraph">Best place to post your school pics</p>

            <div class="button">
                <Link to="/register"><button type="submit" class="firstPage register">Register</button></Link>
                <Link to="/login" ><button type="submit" class="firstPage login">Login</button></Link>
                <Link to="/#" ><button type="submit" class="firstPage facebook">Register with Facebook</button></Link>
            </div>
        </div>
    )
}

export default FirstPage;