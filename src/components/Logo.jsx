import React from "react";
import "./Logo.css"

function Logo(props){

    let classe = props.pequeno ? "pequeno" : "";

    return (

        <span className = {"Logo " + classe}>TODOLIST</span>

    )

}

export default Logo;