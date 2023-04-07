import React from "react";
// import { Link } from "react-router-dom";

function Button(props) {
    return (
      <button className="newButton" onClick={props.button1} >{props.button}</button> 
    )
}

export default Button;