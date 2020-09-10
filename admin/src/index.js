import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.css"
import {BrowserRouter, Route } from "react-router-dom"
import ItemList from './components/ItemList';
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AddItem from "./components/AddItem";
import ItemDetails from "./components/ItemDetails"
import Search from './components/search';

ReactDOM.render(
            <BrowserRouter>
                <NavBar />
                <Search/>
                <Route exact path="/" component= {Home}/>
                <Route exact path="/admin/items" component= {ItemList} />
                <Route exact path="/admin/additem" component ={AddItem}/>
              
                
            </BrowserRouter>,   
            document.getElementById('root'));
