import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthNav from "./authNav";
import Register from "./signupButton";

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
          <div className="col-md-10">
            <br />
            <div className="logoApp">
              <span><img
              src="https://i.pinimg.com/236x/a9/ff/02/a9ff027115ed0ce7922b9f29c4a8d88a--logo-bookstore-book-logo-design.jpg"
              alt="..."/>
              </span>
              <span> Luminex Book Shop</span>
             </div>
            
          </div>

          <div className="col-md-2">

             <div className="card cart-card">
              <div className="card-body">
               <h5 className="card-title cart-title">Shopping Cart</h5>
               <span className="d-flex">
               <Link className="btn btn-dark go-cart-btn" to='/cart'>Go to cart</Link>
                   <img className="cart-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRaiZuRiYLdTP2Faf5gv2zQvfGxaLU-_9d_-g&usqp=CAU"/>
                </span>

              </div>  
           </div>
         </div>
        </div>

      </div>

    );
  }
}

export default Navbar;
