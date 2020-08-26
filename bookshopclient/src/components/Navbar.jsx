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
       
          <Link className="btn btn-success" to="/">Home</Link>{" "}
          {/* <Link to="/login">SignIn</Link>{" "}
           <Link to="/register">SignUp</Link>{" "}   */}
            <AuthNav/>
            <Register/>
          <Link className="btn btn-success" to="/aboutus">About Us</Link>
         
        </nav>

        <div className="text-center">
          <br />
          <h2 className="h1"> Luminex Book Shop</h2>
          <img
            src="https://i.pinimg.com/236x/a9/ff/02/a9ff027115ed0ce7922b9f29c4a8d88a--logo-bookstore-book-logo-design.jpg"
            alt="..."
          />
          <hr />
        </div>
      </div>
    );
  }
}

export default Navbar;
