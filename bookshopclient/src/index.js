import React from "react"
import ReactDom from "react-dom"
import "bootstrap/dist/css/bootstrap.css"
import { BrowserRouter, Route } from 'react-router-dom'
import Aboutus from './components/Aboutus';
import Home from './components/Items';
import Navbar from './components/Navbar';
import ViewDetails from './components/viewDetails';
import Search from './components/search';
import Auth0ProviderWithHistory  from './auth0histroy';
import './styles.css'


ReactDom.render(
<BrowserRouter>
 <Auth0ProviderWithHistory>
<Navbar/>
<Search/>
<Route exact path="/" component={Home}/>
<Route exact path ="/viewDetails/:id" component= {ViewDetails}/>
<Route exact path="/aboutus" component={Aboutus}/> 
</Auth0ProviderWithHistory>
</BrowserRouter>,
document.getElementById("root")

);