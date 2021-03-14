import React from "react";
import "./Validacao.css"

class Validacao extends React.Component{

    render(){

        return <div className = "Validacao">{this.props.msgErro}</div>

    }

}

export default Validacao;