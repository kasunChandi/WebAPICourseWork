import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {};

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
        <nav className="ml-auto">
          <Link to="/">Home</Link>{" "}
          <Link to="/login">SignIn</Link>{" "}
          <Link to="/register">SignUp</Link>{" "}
          <Link to="/aboutus">About Us</Link>
          </nav>
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
        <div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon1"
              >
                Search
              </button>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Search books "
              aria-label="Example text with button addon"
              aria-describedby="button-addon1"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
