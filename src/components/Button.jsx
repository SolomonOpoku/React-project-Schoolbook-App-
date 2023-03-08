import React from "react";
import { Link } from "react-router-dom";

function Button(props) {
    return (
      <Link to="/Home"><button className="newButton" type='submit'>{props.button}</button></Link>  
    )
}

export default Button;