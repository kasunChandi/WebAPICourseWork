import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthNav from "./authNav";
import Register from "./signupButton";

class Navbar extends Component {
  state = {};

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark nav justify-content-end">
       
          <Link className="btn btn-secondary" to="/">Home</Link>{" "}
          {/* <Link to="/login">SignIn</Link>{" "}
           <Link to="/register">SignUp</Link>{" "}   */}
            <AuthNav/>
            <Register/>
          <Link className="btn btn-secondary" to="/aboutus">About Us</Link>
         
        </nav>
        {" "}
        <div className="row top-section">
          <div className="col-md-10">
            <br />
            <h2 className="h1"> Luminex Book Shop</h2>
            <img
              src="https://i.pinimg.com/236x/a9/ff/02/a9ff027115ed0ce7922b9f29c4a8d88a--logo-bookstore-book-logo-design.jpg"
              alt="..."
            />
          </div>

          <div className="col-md-2">

             <div className="card cart-card">
              <div className="card-body">
               <h5 className="card-title cart-title">Shopping Cart</h5>
               <span className="d-flex">
                   <h6 className="item-no">2 Items</h6>
                   <img className="cart-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRaiZuRiYLdTP2Faf5gv2zQvfGxaLU-_9d_-g&usqp=CAU"/>
                </span>
                <hr />
               <span >
                 <p className="mb-0">Total</p>
                 <h6>LKR 2000.00</h6>
                 <Link className="btn btn-danger" to='/checkout'>Checkout</Link>
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
