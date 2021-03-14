import React from "react";
import Logo from "../Logo";
import "./Form.css"

class Form extends React.Component{

    handleFormSubmit(event){

        event.preventDefault();
        this.props.onSubmit(event);

    }

    render(){

        return (

        <div className = "Form">

            <form onSubmit = {this.handleFormSubmit.bind(this)} method = "POST" action = {"http://" + this.props.action}>

                <Logo pequeno/>
                {this.props.children}
                <input className = "Botao" type = "submit" value = "Login"/>

            </form>

        </div>

        )

    }

}

export default Form;