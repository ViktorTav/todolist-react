import React from "react";
import Botao from "./components/Form/Botao";
import { Link } from "react-router-dom";
import Logo from "./components/Logo";
import axios from "axios";
import configApp from "./configApp.json"
import "./Home.css";

class Home extends React.Component{

    verificaAutenticacao(){

        axios(`${configApp.urlApi}/autenticacao`)
        .then(res =>{

            let pagina;

            res.data.autenticado ? pagina = "/app" : pagina = "/login";

            this.props.history.push(pagina);

        });

    }

    componentDidMount(){

    }

    render(){

        return (
        
        <div id = "Home">

            <div id = "content">

                <Logo/>
                <h2>Um simples aplicativo que facilitar sua rotina,</h2>
                <h3>no computador ou no celular</h3>
                <Botao onClick = {this.verificaAutenticacao.bind(this)}>Entrar</Botao>
                <p>Psiu! Ainda não tem cadastro? <Link to = "/cadastro">Cadastre-se</Link></p>

            </div>

        </div>
        
        )

    }

}

export default Home;