import React from "react";
import closeIcon from "../icons/close_25x25.svg"
import "./TodoItem.css";

class TodoItem extends React.Component{

    constructor(props){

        super(props);
        this.mudarEstadoConcluido = this.mudarEstadoConcluido.bind(this);

    }

    mudarEstadoConcluido(event){

        console.log(this.props.atualizarContagem);

        const todo = event.target.parentElement;
        let concluido;
        event.target.checked ? concluido = true : concluido = false;

        todo.setAttribute("data-concluido",concluido);    
        
        this.props.atualizarContagem(event);

    }

    render(){

        return (

            <div data-concluido = {this.props.concluido} data-todoid = {this.props.id} className = "TodoItem">

                <input checked = {Boolean(this.props.concluido)} onClick = {this.mudarEstadoConcluido} type = "checkbox"/>
                <p>{this.props.children}</p>
                <img onClick = {this.props.remove} alt = "" src = {closeIcon}></img>

            </div>

        )

    }

}

export default TodoItem;