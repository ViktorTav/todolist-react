import React from "react";
import Form from "../components/Form/Form";
import Input from "../components/Form/Input";
import axios from "axios";
import configApp from "../configApp.json"
import "./Cadastro.css"

class Cadastro extends React.Component{

    constructor(props){

        super(props);
        this.state = {

            msgErroSenha: "",
            msgErroEmail: ""

        }

        this.msgErroTemplate = {

            senhasDiferentes: "A senhas não são iguais!"

        }

        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.validarSenha = this.validarSenha.bind(this);
        this.limparMsgErro = this.limparMsgErro.bind(this);

    }

    validarSenha(form){

        const senha1 = form[2].value
        const senha2 = form[3].value

        if (senha1 !== senha2){

            this.setState({msgErroSenha:this.msgErroTemplate.senhasDiferentes})
            return true;

        } 

        return false;

    }

    handleOnSubmit(event){

        const form = event.target;

        if (this.validarSenha(form)) return;

        const nome = form[0].value
        const email = form[1].value;
        const senha = form[2].value;

        axios.post(`${configApp.urlApi}/cadastro`, {nome,email,senha})
        .then(res => {

            console.log(res);

            const data = res.data;

            console.log(data);

            if (data.falha) this.setState({msgErroEmail: data.mensagem})
            else this.props.history.push("/app");
        })

    }

    limparMsgErro(){

        return this.setState({msgErroSenha: "", msgErroEmail: ""});

    }

    render(){

        return (

            <Form onSubmit = {this.handleOnSubmit} textoBotao = "Cadastrar">
                
                <Input type = "text" placeholder = "Nome Completo:"/>
                <Input type = "email" comValidacao msgErro = {this.state.msgErroEmail} onChange = {this.limparMsgErro} placeholder = "E-mail:"/>
                <Input type = "password" placeholder = "Senha:"/>
                <Input type = "password" comValidacao msgErro = {this.state.msgErroSenha} onChange = {this.limparMsgErro} placeholder = "Confirmar Senha:"/>

            </Form>
        
        )

    }

}

export default Cadastro;