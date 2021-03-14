import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import {Redirect, Route} from "react-router-dom";
import axios from "axios";

function RouteWrapper({redirecionarPara, ehPrivada, component:Component,...rest}){
    
    const [componente, setComponente] = useState("");

    useEffect(()=>{

        async function verificaAutenticacao(){

            const res = await axios.get("http://localhost:4000/autenticacao");

            const ehAutenticado = res.data.autenticado;
            if (!ehAutenticado && ehPrivada) setComponente(<Redirect to = {redirecionarPara}></Redirect>)
            else setComponente(<Route {...rest} render={props => <Component {...props} />} />);

        }

        verificaAutenticacao();

    }, [redirecionarPara, ehPrivada, rest ])
    
    return componente;

}

RouteWrapper.propTypes = {

    redirecionarPara: PropTypes.string,
    ehPrivada: PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,

}

RouteWrapper.defaultProps = {

    redirecionarPara: "/",
    ehPrivada: false

}

export default RouteWrapper;