import React from "react";
import Sidebar from "./layout/Sidebar"
import TodoContainer from "./layout/TodoContainer";
import InputContainer from "./layout/InputContainer";
import "./App.css";

class App extends React.Component{

    constructor(props){

        super(props);

        this.adicionarTodo = this.adicionarTodo.bind(this);
        this.removerTodo = this.removerTodo.bind(this);
        this.atualizarContagem = this.atualizarContagem.bind(this);

        this.state = {

            todoList: [],
            todoPendentes: 0,
            todoConcluidos: 0

        }
    }

    adicionarTodo(texto){

        this.setState((state)=>{
            return {
                todoList: [...state.todoList, {texto: texto}],
                todoPendentes: state.todoPendentes+1,    
            }
        })

    }

    removerTodo(event){
    
        const todo = event.target.parentElement;
        const todoId = todo.dataset.todoid;
        const todoList = this.state.todoList;
        
        todo.classList.add("leaving");

        setTimeout(()=>{

            this.atualizarContagem(event,true);

            todoList.splice(todoId,1);

            this.setState({
                todoList: todoList
            })

            todo.classList.remove("leaving");
    
        },500);

    }

    atualizarContagem(event, excluindoTodo = false){

        let todoConcluidos = this.state.todoConcluidos;
        let todoPendentes = this.state.todoPendentes;

        if (event.target.parentElement.getAttribute("data-concluido") === "true"){

            if (excluindoTodo) todoConcluidos--;
            else{
                todoConcluidos +=1;
                todoPendentes -=1;
            }


        } else{

            if (excluindoTodo) todoPendentes--;
            else{
                todoConcluidos -=1;
                todoPendentes +=1;
            }
        }

        this.setState({
            todoConcluidos:todoConcluidos,
            todoPendentes:todoPendentes
        }, ()=>{console.log(this.state)})

    }

    compon
    
    render(){

        return(

            <div id = "App">

                <Sidebar pendentes = {this.state.todoPendentes} concluidos = {this.state.todoConcluidos}/>
                <TodoContainer atualizarContagem = {this.atualizarContagem} todoList = {this.state.todoList} remove = {this.removerTodo}/>
                <InputContainer add = {this.adicionarTodo}/>

            </div>

        )

    }

}

export default App;
