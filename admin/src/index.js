import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.css"
import {BrowserRouter, Route } from "react-router-dom"
import ItemList from './components/ItemList';
import NavBar from "./components/NavBar";
import Home from "./components/Home"


ReactDOM.render(
            <BrowserRouter>
                <NavBar />
                <Route path="/" component= {Home}/>
                <Route path="/admin/items" component= {ItemList} />
            </BrowserRouter>,   
            document.getElementById('root'));
