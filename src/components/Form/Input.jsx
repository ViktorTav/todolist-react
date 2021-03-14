import React from "react";
import Validacao from "../Validacao";
import "./Input.css"

class Input extends React.Component{

    render(){

        let compValidacao;

        if (this.props.comValidacao){

            compValidacao = <Validacao msgErro = {this.props.msgErro}></Validacao>

        }

        return (

        <>

            <input 
                onChange = {this.props.onChange}
                className = "Input"
                placeholder = {this.props.placeholder}
                name = {this.props.name}
                type = {this.props.type}>
            </input>

            {compValidacao}

        </>

        )

    }

}

export default Input;