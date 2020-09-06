import React, {Component} from "react";
import {Link} from "react-router-dom"

class NavBar extends Component
{
    state = {}

    render()
    {
        return(
            <nav className="navbar navbar-dark nav justify-content-end">
                <a className= "navbar-brand">
                    <Link>Home</Link>
                </a>
                <a className= "navbar-brand">
                    <Link>ItemList</Link>
                </a>
        </nav>
        )
    }

}
export default NavBar;