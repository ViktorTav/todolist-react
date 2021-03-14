import React from "react";
import TextHighlight from "../components/TextHighlight";
import "./Sidebar.css";
import getCookie from "../getCookie";

function Sidebar(props){

    const nome = getCookie("nome");

    return (

        <div id = "Sidebar">

            <div id = "header">

                <h1>{nome}</h1>

            </div>
            <div id = "content"></div>
            <div id = "footer">

                <TextHighlight comBadge badgeTexto = {props.pendentes}>Pendentes</TextHighlight>
                <TextHighlight comBadge badgeTexto =  {props.concluidos}>Concluídas</TextHighlight>

            </div>

        </div>

    )


}

export default Sidebar;