import React from "react";
//import { NavLink as RouterNavLink } from "react-router-dom";


import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./logoutButton";
import LoginButton from "./loginButton";



const AuthNav = () => {
    const { isAuthenticated } = useAuth0();
  
    return (
      <nav className="justify-content-end">
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      </nav>
    );
  };


  export default AuthNav;