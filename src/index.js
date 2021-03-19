import React from "react";
import ReactDom from "react-dom";
import Routes from "./routes";
import "./index.css"
import axios from "axios";

axios.defaults.withCredentials = true;
ReactDom.render(<Routes/>,document.querySelector("#root"))