import React from "react"
import ReactDom from "react-dom"
import "bootstrap/dist/css/bootstrap.css"
import { BrowserRouter, Route } from 'react-router-dom'
import Aboutus from './components/Aboutus';
import Home from './components/Items';
import Navbar from './components/Navbar';
import ViewDetails from './components/viewDetails';
import Cart from './components/CartItems';
import Search from './components/search';
import Checkout  from './components/checkout';
import Auth0ProviderWithHistory  from './auth0histroy';
import ProtectedRoute from './components/protectedRout';
import './styles.css'
import './styleforbillingform.css'
import BillingForm from './components/BillingForm';
import Footer from './components/Footer';


ReactDom.render(
<BrowserRouter>
 <Auth0ProviderWithHistory>
<Navbar/>

<Search/>
<Route exact path="/" component={Home}/>
<Route exact path ="/viewDetails/:id" component= {ViewDetails}/>
<Route exact path ="/cart" component= {Cart}/>
<Route exact path="/aboutus" component={Aboutus}/> 
<Route exact path="/billingform" component={BillingForm}/> 
<ProtectedRoute exact path="/checkout" component={Checkout}/>
</Auth0ProviderWithHistory>
<br/><br/>
<Footer/>
</BrowserRouter>,
document.getElementById("root")

);