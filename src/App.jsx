import React from "react";
import Sidebar from "./layout/Sidebar"
import TodoContainer from "./layout/TodoContainer";
import InputContainer from "./layout/InputContainer";
import axios from "axios";
import configApp from "./configApp.json"
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


    async componentDidMount(){

        this.setState({todoList:[]});

        const info = await axios.get(`${configApp.urlApi}/autenticacao`);
        
        if (!info.data.autenticado) this.props.history.push("/login");

        this.carregarTodos();

        window.addEventListener("beforeunload", async ()=>{

            return await this.salvarTodos();

        });

    }

    async carregarTodos(){

        axios.get(`${configApp.urlApi}/todos`)
        .then((res)=>{

            const todos = res.data;

            this.setState({todoList: todos});
            this.atualizarContagem();

        })


    }

    async salvarTodos(){

        await axios.post(`${configApp.urlApi}/todos`, {todos: this.state.todoList})

    }

    adicionarTodo(texto){

        this.setState((state)=>{
            return {
                todoList: [...state.todoList, {texto: texto, concluido: false}],   
            }
        },()=>this.atualizarContagem());
    
    }

    removerTodo(event){
    
        const todo = event.target.parentElement;
        const todoId = todo.dataset.todoid;
        const todoList = this.state.todoList;
        
        todo.classList.add("leaving");

        setTimeout(()=>{

            todoList.splice(todoId,1);

            this.setState({
                todoList: todoList
            })

            this.atualizarContagem();

            todo.classList.remove("leaving");
    
        },500);

    }

    atualizarContagem(){

        let todoConcluidos = 0;
        let todoPendentes = 0;
        let todoList = this.state.todoList;

        const todosItens = document.querySelectorAll("div.TodoItem");

        todosItens.forEach((todoItem)=>{

            const todoEstaConcluido = todoItem.getAttribute("data-concluido");
            const todoId = todoItem.getAttribute("data-todoid");

            if (todoEstaConcluido === "true"){

                todoList[todoId].concluido = true;
                ++todoConcluidos;

            } else{

                todoList[todoId].concluido = false;
                ++todoPendentes;

            }

        })

        this.setState({
            todoConcluidos:todoConcluidos,
            todoPendentes:todoPendentes,
            todoList:todoList
        })

    }
    
    render(){

        return(

            <div id = "App">

                <Sidebar salvarTodos = {this.salvarTodos.bind(this)} history = {this.props.history} pendentes = {this.state.todoPendentes} concluidos = {this.state.todoConcluidos}/>
                <TodoContainer atualizarContagem = {this.atualizarContagem} todoList = {this.state.todoList} remove = {this.removerTodo}/>
                <InputContainer add = {this.adicionarTodo}/>

            </div>

        )

    }

}

export default App;
