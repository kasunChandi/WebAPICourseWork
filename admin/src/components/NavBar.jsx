import React, {Component} from "react";
import {Link} from "react-router-dom";
import logo from "../Assests/icon.jpg";


class NavBar extends Component
{
    state = {};

    render()
    {
        return(
            <div>
                <nav className="navbar navbar-dark nav justify-content-end">
                
                    <Link className="btn" to="/">Home</Link>{" "}
                    <Link className="btn" to="/admin/items">Item List</Link>
                    <Link className="btn" to="/admin/additem">Add Item</Link>
                    <Link className="btn" to="/admin/itemdetails">Update</Link>
        </nav>
        {" "}
        <div className="row top-section">
            <div className="col-md-10">
                <br />
                    <div className="logoApp">
                        <img 
                            src = {logo}
                            
                            alt="..."/>
                            <h4>
                                Luminex Bookshop
                            </h4>
                    </div>
            </div>
            <div>

            </div>
        </div>
            </div>
            
        );

    }

}
export default NavBar;