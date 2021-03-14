import React from "react";
import "./TextHighlight.css";

function TextHighlight(props){

    let classe = props.comBadge ? "comBadge" : "";

    return (

        <div data-badgetexto = {props.badgeTexto} className = {"TextHighlight "+classe} id = "TextHighlight">{props.children}</div>

    )


}

export default TextHighlight;