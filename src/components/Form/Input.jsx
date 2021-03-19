import React from "react";
import Validacao from "../Validacao";
import "./Input.css"

class Input extends React.Component{

    render(){

        let comValidacao = this.props.comValidacao ? <Validacao msgErro = {this.props.msgErro}></Validacao> : ""

        return (

        <>

            <input 
                required
                onChange = {this.props.onChange}
                className = "Input"
                placeholder = {this.props.placeholder}
                name = {this.props.name}
                type = {this.props.type}>
            </input>

            {comValidacao}

        </>

        )

    }

}

export default Input;