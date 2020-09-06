import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthNav from "./authNav";
import Register from "./signupButton";
import ImageSlider from "./imageSlider";
import logo from "../Assests/Logo.png";

class Navbar extends Component {
  state = {};

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark nav justify-content-end">
       
          <Link className="btn" to="/">Home</Link>{" "}
          {/* <Link to="/login">SignIn</Link>{" "}
           <Link to="/register">SignUp</Link>{" "}   */}
            <AuthNav/>
            <Register/>
          <Link className="btn" to="/aboutus">About Us</Link>
         
        </nav>
        {" "}
        <div className="row top-section">
          <div className="col-md-2">
            <br />
            <div className="logoApp"><img
              src={logo}
              alt="..."/>
             </div>
            
          </div>

          <div className="col-md-8"> 
          <ImageSlider/>
          </div>

          <div className="col-md-2">

             <div className="card cart-card">
              <div className="card-body">
               
               <span className="d-flex">
               <h5 className="card-title cart-title">Shopping Cart</h5>
                   <img className="cart-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRaiZuRiYLdTP2Faf5gv2zQvfGxaLU-_9d_-g&usqp=CAU"/>
                </span>
                <Link className="btn btn-dark go-cart-btn" to='/cart'>Go To Cart</Link>
              </div>  
           </div>
         </div>
        </div>

      </div>

    );
  }
}

export default Navbar;
