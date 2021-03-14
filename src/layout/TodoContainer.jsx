import React from "react";
import TodoItem from "../components/TodoItem";
import "./TodoContainer.css";

class TodoContainer extends React.Component{

    constructor(props){

        super(props);
        this.buscarTodos = this.buscarTodos.bind(this);
    }

    buscarTodos(){

        console.log(this.props.todoList);

        if (this.props.todoList){

            const todos = this.props.todoList.map((todo,index)=>{

                return <TodoItem atualizarContagem = {this.props.atualizarContagem} remove = {this.props.remove} key = {index} id = {index}>{todo.texto}</TodoItem>
    
            })
    
            return todos;

        }

    }

    render(){

        const todos = this.buscarTodos();

        return(

            <div id = "TodoContainer">
    
                <ul id = "TodoList">{todos}</ul>
    
            </div>
    
        )

    } 


}

export default TodoContainer;