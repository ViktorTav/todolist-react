import React from "react";
import Form from "../components/Form/Form";
import Input from "../components/Form/Input"
import axios from "axios";
import configApp from "../configApp.json"
import "./Login.css"

class Login extends React.Component{

    constructor(props){

        super(props)

        this.state = {

            msgErro: ""

        }

        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.limparMsgErro = this.limparMsgErro.bind(this);

    }

    limparMsgErro(){

        return this.setState({msgErro: ""});

    }

    componentDidMount(){

        axios(`${configApp.urlApi}/autenticacao`)
        .then(res =>{

            let pagina = res.data.autenticado ? "/app" : "/login";

            this.props.history.push(pagina);

        });

    }

    handleOnSubmit(event){

        const form = event.target;

        const email = form[0].value;
        const senha = form[1].value; 

        axios(`${configApp.urlApi}/login`, {data:{email,senha}, method:"POST"})
        .then(res => {

            const data = res.data;

            console.log(data);

            if (data.falha){

                this.setState({msgErro: data.mensagem})

            }else{

                this.props.history.push("/app");

            }
        })

    }

    render(){

        return (

            <Form onSubmit = {this.handleOnSubmit} textoBotao = "Login">
                
                <Input onChange = {this.limparMsgErro} name = "email" type = "email" placeholder = "E-mail"></Input>
                <Input comValidacao msgErro = {this.state.msgErro} onChange = {this.limparMsgErro} name = "senha" type = "password" placeholder = "Senha"></Input>

            </Form>
        
        )

    }

}

export default Login;