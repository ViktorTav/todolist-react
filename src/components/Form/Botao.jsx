import React from "react";
import "./Botao.css"

function Botao (props){

    return(

        <button 
        onClick ={props.onClick}
        type = {props.type} 
        className = "Botao">
        {props.children}</button>

    )

}

export default Botao;