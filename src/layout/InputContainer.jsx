import React from "react";
import "./InputContainer.css";

class InputContainer extends React.Component{

    constructor(props){

        super(props);
        this.handleClickButton = this.handleClickButton.bind(this);

        this.setTextInputRef = this.setTextInputRef.bind(this);

    }

    setTextInputRef(element){

        this.todoInput = element;

    }

    handleClickButton(){

        const input = this.todoInput;

        if(input.value !== ""){

            this.props.add(input.value);

        }

        input.value = "";
        input.focus();
    }

    render(){

        return (

            <div id = "InputContainer">
    
                <input ref = {this.setTextInputRef} placeholder = "O que você deseja fazer hoje?"></input>
                <button onClick = {this.handleClickButton} className = "redondo">{">"}</button>
    
            </div>
    
        )

    }

}

export default InputContainer;