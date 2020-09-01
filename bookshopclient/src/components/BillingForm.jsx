import React, { Component } from "react";


class BillingForm extends Component {
  state = {};

  render() {
    return (
        <div id="center">
            <div className="cgrow">
                <div className="chcol-75">
                    <div className="chcontainer">
                        <div className="chrow">
                            <div className="chcol-50">
                                <h3>Billing Address</h3>
                                <label><i className="fa fa-user"></i> Full Name</label>
                                <input type="text" id="fname" name="firstname" placeholder="John M. Doe"/>
                                <label><i className="fa fa-envelope"></i> Email</label>
                                <input type="text" id="email" name="email" placeholder="john@example.com"/>
                                <label><i className="fa fa-address-card-o"></i> Address</label>
                                <input type="text" id="adr" name="address" placeholder="542 W. 15th Street"/>
                                <label><i className="fa fa-institution"></i> City</label>
                                <input type="text" id="city" name="city" placeholder="New York"/>

                                <div className="chrow">
                                    <div className="chcol-50">
                                        <label>State</label>
                                        <input type="text" id="state" name="state" placeholder="NY"/>
                                    </div>
                                    <div className="chcol-50">
                                        <label>Zip</label>
                                        <input type="text" id="zip" name="zip" placeholder="10001"/>
                                    </div>
                                </div>
                            </div>       
                        </div>
                    </div>
                </div>   

                <div className="chcol-25">
                    <div className="chcontainer">
                        <h4>Cart
                            <span className="chprice" style={{color:"black"}}>
                                <i className="fa fa-shopping-cart"></i>
                                <b>4</b>
                            </span>
                        </h4>
                        <p><a href="#">Product 1</a> <span className="chprice">$15</span></p>
                        <p><a href="#">Product 2</a> <span className="chprice">$5</span></p>
                        <p><a href="#">Product 3</a> <span className="chprice">$8</span></p>
                        <p><a href="#">Product 4</a> <span className="chprice">$2</span></p>
                        <p>Total <span className="chprice" style={{color:"black"}}><b>$30</b></span></p>
                    </div>
                </div>
                <input type="submit" value="Continue to checkout" className="chbtn"></input>
            </div>
        </div>

    );
  }
}

export default BillingForm;
