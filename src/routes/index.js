import {BrowserRouter as Router, Switch} from "react-router-dom";
import Route from "./Route";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import Home from "../Home";
import App from "../App";

const Routes = ()=>{

    return (

    <Router>

        <Switch>

            <Route exact path = "/" component = {Home}/>
            <Route path = "/login" component = {Login}/>
            <Route path = "/cadastro" component = {Cadastro}/>
            <Route path = "/app" ehPrivada redirecionarPara = "/login" component = {App}/>

        </Switch>

    </Router>

    )

}

export default Routes;