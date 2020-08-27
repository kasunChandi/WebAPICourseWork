import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import  "bootstrap/dist/css/bootstrap.css"
//import { Button } from "react-bootstrap";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      onClick={() => loginWithRedirect()}
      variant="primary"
      className="btn btn-secondary"
    >
      Log In
    </button> 
  );
};

export default LoginButton;