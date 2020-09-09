import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.css"
import {BrowserRouter, Route } from "react-router-dom"
import ItemList from './components/ItemList';
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AddItem from "./components/AddItem";
import ItemDetails from "./components/ItemDetails"


ReactDOM.render(
            <BrowserRouter>
                <NavBar />
                <Route exact path="/" component= {Home}/>
                <Route exact path="/admin/items" component= {ItemList} />
                <Route exact path="/admin/additem" component ={AddItem}/>
                <Route exact path ="/admin/updateitem" component ={ItemDetails}/>
                
            </BrowserRouter>,   
            document.getElementById('root'));
