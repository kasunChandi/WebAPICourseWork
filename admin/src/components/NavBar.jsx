import React, {Component} from "react";
import {Link} from "react-router-dom"

class NavBar extends Component
{
    state = {}

    render()
    {
        return(
            <div>
                <nav className="navbar navbar-dark nav justify-content-end">
                
                    <Link>Home</Link>
                    <Link>ItemList</Link>
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
        </div>
            </div>
            
        );

    }

}
export default NavBar;