import React from "react";
import TextHighlight from "../components/TextHighlight";
import "./Sidebar.css";
import getCookie from "../getCookie";
import axios from "axios";
import configApp from "../configApp.json";

class Sidebar extends React.Component{

    async desconectarUsuario(){

        await this.props.salvarTodos();

        axios.post(`${configApp.urlApi}/logout`)
        .then((res)=>this.props.history.push(res.data));

    }

    render(){

        const nome = getCookie("nome");

        return (
    
            <div id = "Sidebar">
    
                <div id = "header">
                    <span id = "nomeUsuario">{nome}</span><br/>
                    <span onClick = {this.desconectarUsuario.bind(this)} id = "desconectarUsuario">Sair</span>
                </div>
                <div id = "content"></div>
                <div id = "footer">
    
                    <TextHighlight comBadge badgeTexto = {this.props.pendentes}>Pendentes</TextHighlight>
                    <TextHighlight comBadge badgeTexto =  {this.props.concluidos}>Concluídas</TextHighlight>
    
                </div>
    
            </div>
    
        )

    }

}

export default Sidebar;