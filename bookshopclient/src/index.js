import React from "react"
import ReactDom from "react-dom"
import "bootstrap/dist/css/bootstrap.css"
import { BrowserRouter, Route } from 'react-router-dom'
import Aboutus from './components/Aboutus';
import Home from './components/Items';
import Navbar from './components/Navbar';

ReactDom.render(
<BrowserRouter>
<Navbar/>
<Route exact path="/" component={Home}/>
<Route exact path="/aboutus" component={Aboutus}/> 
</BrowserRouter>,
document.getElementById("root")

);