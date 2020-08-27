import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "bootstrap/dist/css/bootstrap.css"
//import { Button } from "react-bootstrap";

const SignupButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      onClick={() =>
        loginWithRedirect({
          screen_hint: "signup",
        })
      }
      variant="primary"
      className="btn btn-secondary"
    >
      Sign Up
    </button>
  );
};

export default SignupButton;