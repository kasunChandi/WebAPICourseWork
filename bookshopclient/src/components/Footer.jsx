import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer className="footer">
        <div className="footer-copyright text-center py-3" >
          © 2020 Copyright:
          <a href="http://localhost:3000/">LuminexBookShop.com</a>
        </div>
      </footer>
    );
  }
}
export default Footer;
